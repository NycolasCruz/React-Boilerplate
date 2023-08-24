import { themes } from "@storybook/theming";

import "../src/global.scss";

export const parameters = {
	controls: {
		matchers: {
			color: /(background|color)$/i,
		},
	},
	docs: {
		theme: themes.dark,
	},
};
