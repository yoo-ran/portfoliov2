import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yoorankim.com',
      lastModified: new Date(),
    },
    {
      url: 'https://yoorankim.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://yoorankim.com/projects',
      lastModified: new Date(),
    },
  ];
}