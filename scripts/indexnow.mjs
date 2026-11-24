// Pings IndexNow (Bing, Yandex, Seznam, Naver) with every sitemap URL so new pages get crawled quickly.
// Bing's index feeds ChatGPT search and Copilot. Run after deploy:  node scripts/indexnow.mjs
const HOST = 'wishly.rafahim.com';
const KEY = 'cf9077bd5922e855e401dc8f89d517ed';
const site = `https://${HOST}`;
const xml = await (await fetch(`${site}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => u.startsWith(site));
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${site}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs, HTTP ${res.status}`);
