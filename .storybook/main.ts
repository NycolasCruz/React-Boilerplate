module.exports = {
	stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/react-vite",
	},
	docs: {
		autodocs: true,
	},
};
