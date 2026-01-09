import { defineCollection, z } from "astro:content";

const videos = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		publishDate: z.date(),
		youtubeId: z
			.string()
			.regex(/^[a-zA-Z0-9_-]{11}$/, "Invalid YouTube video ID"),
		description: z.string().min(100).max(300),
		tags: z.array(z.string()),
		featured: z.boolean().optional(),
	}),
});

export const collections = {
	videos,
};
