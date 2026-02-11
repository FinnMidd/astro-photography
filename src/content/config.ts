import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const photos = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/photos" }),
    schema: z.object({
        src: z.string(),
        title: z.string(),
        alt: z.string().optional(),
        category: z.string(),
        description: z.string().optional(),
        location: z.string().optional(),
        camera: z.string().optional(),
        lens: z.string().optional(),
        settings: z.object({
            f_stop: z.string().optional(),
            shutter_speed: z.string().optional(),
            iso: z.number().optional(),
            focal_length: z.string().optional(),
        }).optional(),
        date_taken: z.date().optional(),
        publish_date: z.date(),
        status: z.enum(['draft', 'published']).default('draft'),
        seo: z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            keywords: z.array(z.string()).optional(),
        }).optional(),
    }),
});

export const collections = { photos };
