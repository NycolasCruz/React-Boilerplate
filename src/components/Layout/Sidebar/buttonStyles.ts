import { MenuItemStyles } from "react-pro-sidebar";

export const buttonStyles: MenuItemStyles = {
	button: ({ level }) => {
		const mouseOverStyles = { "&:hover": { backgroundColor: "#18212e" } };

		if (level === 0) {
			return mouseOverStyles;
		}

		return {
			backgroundColor: "#222d3b",
			...mouseOverStyles,
		};
	},
};
