import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";

import "./styles.scss";

export function Images() {
	return (
		<>
			<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
				<img src={viteLogo} className="logo" alt="Vite logo" />
			</a>

			<a href="https://react.dev" target="_blank" rel="noreferrer">
				<img src={reactLogo} className="logo react" alt="React logo" />
			</a>
		</>
	);
}
