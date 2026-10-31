import type { APIRoute } from 'astro';
import {site,indexable} from '../data/site';
export const GET: APIRoute=()=>new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${indexable?`<url><loc>${new URL('/',site.siteUrl!).href}</loc></url>`:''}</urlset>`,{headers:{'Content-Type':'application/xml'}});
