import type { APIRoute } from 'astro';
import siteConfig from '@/config/site.config';

// Pre-render at build time so the favicon is a plain static file in the output.
export const prerender = true;

export const GET: APIRoute = () => {
  const svg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" rx="10" fill="${siteConfig.branding.colors.themeColor}"/>
  <path d="M24 6.5 38.5 24 24 41.5 9.5 24 24 6.5Z" stroke="#93C5FD" stroke-width="2.25" stroke-linejoin="round"/>
  <path d="M24 12.5 33.5 24 24 35.5 14.5 24 24 12.5Z" stroke="#DBEAFE" stroke-width="1.65" stroke-linejoin="round" opacity=".82"/>
  <path d="M9.5 24h29M24 6.5v35" stroke="#93C5FD" stroke-width="1.35" stroke-linecap="round" opacity=".55"/>
  <circle cx="24" cy="24" r="3.2" fill="#F8FAFC"/>
  <circle cx="24" cy="6.5" r="1.9" fill="#93C5FD"/>
  <circle cx="38.5" cy="24" r="1.9" fill="#93C5FD"/>
  <circle cx="24" cy="41.5" r="1.9" fill="#93C5FD"/>
  <circle cx="9.5" cy="24" r="1.9" fill="#93C5FD"/>
</svg>`;

  return new Response(svg, {
    headers: { 'Content-Type': 'image/svg+xml' },
  });
};
