import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://keyhelperteam.github.io/keyhelperapp';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/android-beta'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
