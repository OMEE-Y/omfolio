import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
  
        userAgent: ['Googlebot', 'Bingbot', 'Applebot', 'DuckDuckBot'],
        allow: '/',
        disallow: '/private/',
      },
      {
        
        userAgent: ['GPTBot', 'ClaudeBot', 'Google-Extended', 'PerplexityBot'],
        allow: '/', 
        disallow: '/private/',
      },
      {

        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
    ],
    sitemap: 'https://omeey.vercel.app/sitemap.xml',
  }
}