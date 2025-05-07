import { useState, useEffect } from "react";

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	const widthBelowWide = width < 769;

	return {
		width,
		widthBelowWide,
		height,
	};
}

export function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}
