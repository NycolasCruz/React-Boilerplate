import { useState } from "react";

import { Sidebar } from "@/components/Layout/Sidebar";
import { Navbar } from "@/components/Layout/Navbar";

type Props = {
	isCollapsed: boolean;
	setIsCollapsed: (isCollapsed: boolean) => void;
};

export function Layout({ isCollapsed, setIsCollapsed }: Props) {
	const [toggled, setToggled] = useState(false);

	const showSidebar = () => setToggled(true);
	const hideSidebar = () => setToggled(false);

	return (
		<>
			<Sidebar
				isCollapsed={isCollapsed}
				setIsCollapsed={setIsCollapsed}
				toggled={toggled}
				hideSidebar={hideSidebar}
			/>

			<Navbar showSidebar={showSidebar} isCollapsed={isCollapsed} />
		</>
	);
}
