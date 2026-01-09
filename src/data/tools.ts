export interface Tool {
	name: string;
	description: string;
	githubUrl: string;
	status: "active" | "wip";
	isPlugin: boolean;
	order: number;
}

export const tools: Tool[] = [
	{
		name: "wordpress-phpcs",
		description:
			"A modern PHPCS standard for WordPress development with PSR-friendly modifications.",
		githubUrl: "https://github.com/Aysnc-Labs/wordpress-phpcs",
		status: "active",
		isPlugin: false,
		order: 1,
	},
	{
		name: "wordpress-php-cs-fixer",
		description: "PHP CS Fixer configuration tailored for WordPress projects.",
		githubUrl: "https://github.com/Aysnc-Labs/wordpress-php-cs-fixer",
		status: "active",
		isPlugin: false,
		order: 2,
	},
	{
		name: "composer-env-auth",
		description: "Composer plugin for environment-based authentication.",
		githubUrl: "https://github.com/Aysnc-Labs/composer-env-auth",
		status: "active",
		isPlugin: false,
		order: 3,
	},
	{
		name: "wordpress-dynamic-media",
		description: "Dynamic media handling for WordPress (Work in Progress).",
		githubUrl: "https://github.com/Aysnc-Labs/wordpress-dynamic-media",
		status: "wip",
		isPlugin: true,
		order: 4,
	},
];
