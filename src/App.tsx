// import { useState } from "react";
// import classNames from "clsx";

// import { useWindowDimensions } from "@/hooks/useWindowDimensions";

// import { DefaultCard } from "@/components/DefaultCard";
// import { Dashboard } from "@/components/Dashboard";

// export function App() {
// 	const [isCollapsed, setIsCollapsed] = useState(false);
// 	const { width } = useWindowDimensions();

// 	const widthBelowWide = width < 769;

// 	function getDynamicClass() {
// 		if (isCollapsed && !widthBelowWide) {
// 			return "ease-in duration-300 ml-[7.5rem]";
// 		} else if (!isCollapsed && !widthBelowWide) {
// 			return "ease-in-out duration-[400ms] ml-[18.13rem]";
// 		}

// 		return "duration-150 px-8";
// 	}

// 	return (
// 		<>
// 			<Dashboard isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

// 			<div className={classNames("py-7", getDynamicClass())}>
// 				<DefaultCard title="Card Principal" description="descrição do card" />
// 			</div>
// 		</>
// 	);
// }

import { useState } from "react";

import { NewItem } from "components/NewItem";
import { List } from "components/List";

export function App() {
	const [list, setList] = useState<string[]>([]);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				marginTop: "2rem",
			}}
		>
			<NewItem list={list} setList={setList} />
			<div style={{ display: "flex", marginTop: "1rem" }}>
				<List list={list} />
				<List list={list} setList={setList} removeButton />
			</div>
		</div>
	);
}
