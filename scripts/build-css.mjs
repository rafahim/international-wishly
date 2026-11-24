// Builds app/globals.css from the original Wishly stylesheets in ./styles-src,
// keeping only the rules this site uses (the originals are ~290 KB, mostly for the app).
// Run `npm run css` after you add new components or classes.
import { PurgeCSS } from 'purgecss';
import { readFileSync, writeFileSync } from 'node:fs';

const order = ['globals', 'design-system', 'nav-premium', 'nav-profile', 'nav-luxe', 'tablet', 'responsive-fixes', 'home', 'templates-catalog', 'site-footer'];
const css = order
  .map((f) => readFileSync(`styles-src/${f}.css`, 'utf8').replace(/@tailwind[^;]*;/g, ''))
  .join('\n');
writeFileSync('/tmp/_all.css', css);

const [result] = await new PurgeCSS().purge({
  content: ['app/**/*.tsx', 'components/**/*.tsx', 'lib/**/*.ts'],
  css: [{ raw: css }],
  safelist: {
    standard: ['html', 'body', /^is-/, /^has-/, 'open', 'active'],
    greedy: [/^tc-picker/, /^tc-ptile/, /^tc-pill/, /^fq-/, /^hd-/, /^sa-/],
  },
  keyframes: true,
  fontFace: false,
  variables: false,
});
writeFileSync('app/globals.css', result.css);
console.log(`globals.css: ${(css.length / 1024).toFixed(0)} KB -> ${(result.css.length / 1024).toFixed(0)} KB`);
