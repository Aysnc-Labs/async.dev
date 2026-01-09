import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
	const videos = await getCollection("videos");
	const sortedVideos = videos.sort(
		(a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
	);

	return rss({
		title: "Aysnc",
		description:
			"Tools, plugins, and videos for enterprise WordPress development",
		site: context.site!,
		items: sortedVideos.map((video) => ({
			title: video.data.title,
			pubDate: video.data.publishDate,
			description: video.data.description,
			link: `/videos/${video.slug}/`,
		})),
	});
}
