import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

// Check public destinations used by the rendered site; exclude image and favicon URLs.
const files = ['constants.ts', ...(await readdir('components'))
  .filter(name => name.endsWith('.tsx') && name !== 'AiChat.tsx')
  .map(name => join('components', name))];
const urls = new Set();
for (const file of files) {
  const source = await readFile(file, 'utf8');
  for (const match of source.matchAll(/\b(?:href|url|link|linkedin)["']?\s*[=:]\s*["'](https:\/\/[^"']+)["']/g)) {
    urls.add(match[1]);
  }
}
const queue = [...urls];
const results = [];
async function worker() {
  while (queue.length) {
    const url = queue.shift();
    let result;
    try {
      const response = await fetch(url, {
        redirect: 'follow',
        signal: AbortSignal.timeout(15000),
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; GDSC-Website-Link-Check/1.0)' },
      });
      result = { url, status: response.status, destination: response.url,
        result: response.ok ? 'reachable' : [404, 410].includes(response.status) ? 'broken' : 'restricted-or-error' };
      await response.body?.cancel();
    } catch (error) {
      result = { url, status: null, result: 'unreachable', error: error.message };
    }
    results.push(result);
    console.log(`${result.status ?? 'ERR'} ${result.result} ${url}`);
  }
}
await Promise.all(Array.from({ length: 5 }, worker));
await mkdir('.taste-skill', { recursive: true });
await writeFile('.taste-skill/link-check.json', JSON.stringify({ checkedAt: new Date().toISOString(), results }, null, 2));
const counts = results.reduce((sum, item) => ({ ...sum, [item.result]: (sum[item.result] ?? 0) + 1 }), {});
console.log(JSON.stringify({ total: results.length, ...counts }));
process.exitCode = results.some(item => item.result === 'broken' || item.result === 'unreachable') ? 1 : 0;
