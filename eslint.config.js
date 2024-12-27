import pluginReact from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import pluginJs from "@eslint/js";
import globals from "globals";

export default [
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		languageOptions: {
			globals: globals.browser,
		},
	},
	{
		settings: {
			react: {
				version: "detect",
			},
		},
	},
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,jsx,tsx}"],
		rules: {
			"react/react-in-jsx-scope": "off",
		},
	},
	{
		// Override configuration
		files: ["**/@types/**/*"],
		rules: {
			"@typescript-eslint/no-unused-vars": "off",
		},
	},
];
