import { useState } from "react";
import classNames from "clsx";

import { DefaultCard } from "@/components/DefaultCard";
import { Dashboard } from "@/components/Dashboard";

export function App() {
	const [isCollapsed, setIsCollapsed] = useState(false);

	return (
		<>
			<Dashboard isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

			<div
				className={classNames(
					"py-7",
					isCollapsed ? "ease-in duration-300 ml-[7.5rem]" : "ease-in-out duration-500 ml-[18.3rem]"
				)}
			>
				<DefaultCard title="Card Principal" description="descrição do card" />
			</div>
		</>
	);
}
