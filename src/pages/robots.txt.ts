import type { APIRoute } from 'astro';
import {site,indexable} from '../data/site';
export const GET: APIRoute=()=>new Response(indexable?`User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml',site.siteUrl!).href}`:'User-agent: *\nDisallow: /',{headers:{'Content-Type':'text/plain'}});

