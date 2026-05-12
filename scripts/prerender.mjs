import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages, siteUrl } from '../src/content/pages.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const { render } = await import(`file:///${resolve(dist, 'server', 'entry-server.js').replace(/\\/g, '/')}`);
const template = await readFile(resolve(dist, 'index.html'), 'utf-8');

await rm(resolve(dist, 'server'), { force: true, recursive: true });

await Promise.all(pages.map(async (page) => {
    const { html, head } = await render(page.path);
    const output = template
        .replace('<!--head-tags-->', head)
        .replace('<!--app-html-->', html);

    const filePath = page.path === '/'
        ? resolve(dist, 'index.html')
        : resolve(dist, page.path.slice(1), 'index.html');

    await mkdir(dirname(filePath), { recursive: true });
    await writeFile(filePath, output);
}));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `    <url>
        <loc>${siteUrl}${page.path === '/' ? '' : page.path}</loc>
        <changefreq>monthly</changefreq>
        <priority>${page.path === '/' ? '1.0' : '0.8'}</priority>
    </url>`).join('\n')}
</urlset>
`;

await writeFile(resolve(dist, 'sitemap.xml'), sitemap);

await writeFile(resolve(dist, 'robots.txt'), `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`);
