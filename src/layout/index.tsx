import { useState } from "react";
import { Outlet } from "react-router";
import classNames from "clsx";

import { useWindowDimensions } from "@/hooks/useWindowDimensions";

import { Sidebar } from "@/components/Layout/Sidebar";
import { Navbar } from "@/components/Layout/Navbar";

export function Layout() {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [toggled, setToggled] = useState(false);

	const showSidebar = () => setToggled(true);
	const hideSidebar = () => setToggled(false);

	const { widthBelowWide } = useWindowDimensions();

	function getDynamicClass() {
		if (isCollapsed && !widthBelowWide) {
			return "ease-in duration-300 ml-[7.5rem]";
		} else if (!isCollapsed && !widthBelowWide) {
			return "ease-in-out duration-[400ms] ml-[18.13rem]";
		}

		return "duration-150 px-8";
	}

	return (
		<>
			<Sidebar
				isCollapsed={isCollapsed}
				setIsCollapsed={setIsCollapsed}
				toggled={toggled}
				hideSidebar={hideSidebar}
			/>
			<Navbar showSidebar={showSidebar} isCollapsed={isCollapsed} />
			<div className={classNames("py-7", getDynamicClass())}>
				<Outlet />
			</div>
		</>
	);
}
