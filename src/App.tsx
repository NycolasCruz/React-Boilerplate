import { useState } from "react";
import classNames from "clsx";

import { ReactSidebar } from "@/components/ReactSidebar";
import { DefaultCard } from "@/components/DefaultCard";

export function App() {
	const [isCollapsed, setIsCollapsed] = useState(false);

	return (
		<>
			<ReactSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

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
