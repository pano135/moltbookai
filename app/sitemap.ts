import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://moltbookai.org',
            lastModified: new Date('2026-02-01'),
            changeFrequency: 'daily',
            priority: 1,
        },
    ]
}
