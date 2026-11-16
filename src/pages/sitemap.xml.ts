import type { APIRoute } from 'astro';
import { site, indexable } from '../data/site';

export const GET: APIRoute = () => {
  const paths = site.accountingPageEnabled ? ['/', '/contable'] : ['/'];
  const entries = indexable
    ? paths.map(path => `<url><loc>${new URL(path, site.siteUrl!).href}</loc></url>`).join('')
    : '';
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
