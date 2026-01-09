export function formatDate(date: Date): string {
	return new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	}).format(date);
}

export function sortByDate<T extends { data: { publishDate: Date } }>(
	items: T[],
): T[] {
	return items.sort(
		(a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime(),
	);
}
