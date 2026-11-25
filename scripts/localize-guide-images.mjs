// Downloads every Pexels image used in lib/guide-visuals.ts into public/guide-images/
// and rewrites the source so pages no longer hotlink images.pexels.com.
// Run once with internet access:  node scripts/localize-guide-images.mjs
// Credit text and credit links are kept as they are.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';

const FILE = 'lib/guide-visuals.ts';
const OUT = 'public/guide-images';
mkdirSync(OUT, { recursive: true });

let source = readFileSync(FILE, 'utf8');
const urls = [...new Set([...source.matchAll(/https:\/\/images\.pexels\.com\/photos\/(\d+)\/[^'"`\s]+/g)].map((m) => [m[0], m[1]]))];
let ok = 0;
for (const [url, id] of urls) {
  const name = `pexels-${id}.jpg`;
  const target = `${OUT}/${name}`;
  if (!existsSync(target)) {
    // Ask Pexels for a 1200px-wide compressed copy instead of the huge original.
    const res = await fetch(`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`);
    if (!res.ok) { console.warn(`SKIP ${id}: HTTP ${res.status}`); continue; }
    writeFileSync(target, Buffer.from(await res.arrayBuffer()));
  }
  source = source.split(url).join(`/guide-images/${name}`);
  ok++;
}
writeFileSync(FILE, source);
console.log(`Localized ${ok}/${urls.length} Pexels images. Commit public/guide-images and lib/guide-visuals.ts.`);
