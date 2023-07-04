import { Logos } from "@/components/Logos";

import { ReactSidebar } from "./components/ReactSidebar";

export function App() {
	return (
		<div className="flex">
			<ReactSidebar />

			<Logos />
		</div>
	);
}
