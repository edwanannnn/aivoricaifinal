import { z, defineCollection } from 'astro:content';

// Project collection schema
const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        client: z.string(),
        year: z.number(),
        category: z.enum(['branding', 'digital', 'motion', 'strategy']),
        services: z.array(z.string()),
        heroImage: z.string(),
        images: z.array(z.string()).default([]),
        challenge: z.string(),
        solution: z.string(),
        results: z.string().optional(),
        metrics: z.array(z.object({
            label: z.string(),
            value: z.string()
        })).optional(),
        testimonial: z.object({
            quote: z.string(),
            author: z.string(),
            role: z.string()
        }).optional(),
        liveUrl: z.string().optional(),
        featured: z.boolean().default(false),
        order: z.number().default(0)
    })
});

// Blog collection schema
const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        author: z.string().default('AIVORIC Team'),
        date: z.date(),
        category: z.enum(['design', 'development', 'strategy', 'industry']),
        heroImage: z.string(),
        tags: z.array(z.string()),
        featured: z.boolean().default(false),
        readTime: z.number() // in minutes
    })
});

export const collections = {
    'projects': projectsCollection,
    'blog': blogCollection
};
