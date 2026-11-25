import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const ts = require('typescript');
const root = process.cwd();
const factsPath = path.join(root, 'lib', 'country-content-facts.json');
const facts = JSON.parse(fs.readFileSync(factsPath, 'utf8'));
const source = fs.readFileSync(path.join(root, 'lib', 'country-content-generated.ts'), 'utf8');
const countrySource = fs.readFileSync(path.join(root, 'lib', 'countries.ts'), 'utf8');
const names = Object.fromEntries(
  [...countrySource.matchAll(/^\s*\['([a-z0-9-]+)'\s*,\s*'([^']+)'\s*,\s*'[A-Z]{2}'/gm)]
    .map((match) => [match[1], match[2]]),
);

const compiled = ts.transpileModule(source, {
  reportDiagnostics: true,
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2020,
    esModuleInterop: true,
  },
});
const compileErrors = (compiled.diagnostics || []).filter((item) => item.category === ts.DiagnosticCategory.Error);
if (compileErrors.length) {
  for (const error of compileErrors) console.error(ts.flattenDiagnosticMessageText(error.messageText, '\n'));
  process.exit(1);
}

const generatedModule = { exports: {} };
const localRequire = (specifier) => {
  if (specifier === './country-content-facts.json') return facts;
  throw new Error(`Unexpected runtime import from generated content: ${specifier}`);
};
new Function('require', 'module', 'exports', compiled.outputText)(localRequire, generatedModule, generatedModule.exports);

const slugs = Object.keys(facts);
const errors = [];
if (slugs.length !== 185) errors.push(`Expected 185 generated country facts; found ${slugs.length}.`);
for (const slug of slugs) if (!names[slug]) errors.push(`Generated fact has no country row: ${slug}`);

const tokenise = (value) => value.toLowerCase().match(/[a-z0-9]+(?:['’][a-z0-9]+)?/g) || [];
const pageRows = [];
let minimumWords = Number.POSITIVE_INFINITY;
let maximumWords = 0;
for (const slug of slugs) {
  const content = generatedModule.exports.generateCountryContent(names[slug], slug);
  if (!content) {
    errors.push(`Content generator returned no guide for ${slug}.`);
    continue;
  }
  const wordCount = generatedModule.exports.countCountryContentWords(content);
  minimumWords = Math.min(minimumWords, wordCount);
  maximumWords = Math.max(maximumWords, wordCount);
  if (wordCount < 500) errors.push(`${slug} has only ${wordCount} body words.`);
  if (content.metaTitle.length > 50) errors.push(`${slug} meta title exceeds 50 characters.`);
  if (content.metaDescription.length < 140 || content.metaDescription.length > 158) errors.push(`${slug} meta description is ${content.metaDescription.length} characters.`);
  if (content.faqs.length !== 3) errors.push(`${slug} does not have exactly three FAQs.`);
  for (const [question, answer] of content.faqs) {
    const answerWords = tokenise(answer).length;
    if (!question.trim().endsWith('?')) errors.push(`${slug} has an FAQ question without a question mark.`);
    if (answerWords < 35 || answerWords > 90) errors.push(`${slug} FAQ answer has ${answerWords} words.`);
  }
  if (new Set(content.sampleWishes).size !== content.sampleWishes.length) errors.push(`${slug} repeats a sample wish.`);
  if ((content.sources || []).length < 2) errors.push(`${slug} has fewer than two source entries.`);
  const body = [
    content.intro,
    ...content.occasions.flatMap((occasion) => [occasion.name, occasion.whenUsually, occasion.note]),
    ...content.greetingCustoms,
    content.sharingHabits,
    ...content.sampleWishes,
    ...content.sensitivities,
    ...content.faqs.flat(),
  ].join(' ');
  pageRows.push({ slug, tokens: tokenise(body) });
}

const owners = new Map();
const pageGramSets = new Map();
for (const page of pageRows) {
  const grams = new Set();
  for (let index = 0; index <= page.tokens.length - 6; index += 1) {
    grams.add(page.tokens.slice(index, index + 6).join(' '));
  }
  pageGramSets.set(page.slug, grams);
  for (const gram of grams) {
    if (!owners.has(gram)) owners.set(gram, new Set());
    owners.get(gram).add(page.slug);
  }
}
let totalSixGrams = 0;
let repeatedSixGrams = 0;
for (const page of pageRows) {
  for (let index = 0; index <= page.tokens.length - 6; index += 1) {
    totalSixGrams += 1;
    const gram = page.tokens.slice(index, index + 6).join(' ');
    if ((owners.get(gram)?.size || 0) >= 20) repeatedSixGrams += 1;
  }
}
const overlapShare = totalSixGrams ? repeatedSixGrams / totalSixGrams : 1;
let highestPair = { a: '', b: '', overlap: 0, jaccard: 0 };
for (let first = 0; first < pageRows.length; first += 1) {
  for (let second = first + 1; second < pageRows.length; second += 1) {
    const a = pageGramSets.get(pageRows[first].slug);
    const b = pageGramSets.get(pageRows[second].slug);
    let intersection = 0;
    for (const gram of a) if (b.has(gram)) intersection += 1;
    const overlap = intersection / Math.min(a.size, b.size);
    const jaccard = intersection / (a.size + b.size - intersection);
    if (overlap > highestPair.overlap) highestPair = { a: pageRows[first].slug, b: pageRows[second].slug, overlap, jaccard };
  }
}
const tajikUzbek = (() => {
  const a = pageGramSets.get('tajikistan');
  const b = pageGramSets.get('uzbekistan');
  if (!a || !b) return null;
  let intersection = 0;
  for (const gram of a) if (b.has(gram)) intersection += 1;
  return { overlap: intersection / Math.min(a.size, b.size), jaccard: intersection / (a.size + b.size - intersection) };
})();
const commonPhrases = [...owners.entries()]
  .filter(([, pageSet]) => pageSet.size >= 20)
  .sort((a, b) => b[1].size - a[1].size)
  .slice(0, 8)
  .map(([phrase, pageSet]) => `${pageSet.size} pages: “${phrase}”`);

console.log(`Generated guides audited: ${pageRows.length}`);
console.log(`Body word range: ${minimumWords}–${maximumWords}`);
console.log(`Six-word phrase share repeated across 20+ pages: ${(overlapShare * 100).toFixed(2)}%`);
console.log(`Highest pairwise six-word overlap coefficient: ${highestPair.a}–${highestPair.b} ${(highestPair.overlap * 100).toFixed(2)}% (Jaccard ${(highestPair.jaccard * 100).toFixed(2)}%)`);
if (tajikUzbek) console.log(`Tajikistan–Uzbekistan pairwise six-word overlap coefficient: ${(tajikUzbek.overlap * 100).toFixed(2)}% (Jaccard ${(tajikUzbek.jaccard * 100).toFixed(2)}%)`);
console.log('Most widely shared six-word phrases:', commonPhrases.length ? commonPhrases.join(' | ') : 'none');
if (overlapShare > 0.20) errors.push(`Cross-page six-word phrase overlap is ${(overlapShare * 100).toFixed(2)}%; limit is 20%.`);
if (highestPair.overlap > 0.38) errors.push(`Highest pairwise six-word overlap is ${(highestPair.overlap * 100).toFixed(2)}%; limit is 38%.`);
for (const error of errors) console.error(`FAIL: ${error}`);
if (errors.length) process.exit(1);
console.log('Country-content uniqueness and editorial checks passed.');
