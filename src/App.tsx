import { useEffect } from "react";

import { AppRoutes } from "./routes/AppRoutes";

export function App() {
	function setDefaultTheme() {
		const html = document.getElementById("html") as HTMLHtmlElement;

		html.className = "dark";
	}

	useEffect(() => {
		setDefaultTheme();
	}, []);

	return <AppRoutes />;
}
