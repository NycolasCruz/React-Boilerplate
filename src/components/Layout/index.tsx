import { useState } from "react";

import { ReactSidebar } from "@/components/Layout/ReactSidebar";
import { ReactNavbar } from "@/components/Layout/ReactNavbar";

type Props = {
	isCollapsed: boolean;
	setIsCollapsed: (isCollapsed: boolean) => void;
};

export function Layout({ isCollapsed, setIsCollapsed }: Props) {
	const [toggled, setToggled] = useState(false);

	const showSidebar = () => setToggled(true);
	const hideNavbar = () => setToggled(false);

	return (
		<>
			<ReactSidebar
				isCollapsed={isCollapsed}
				setIsCollapsed={setIsCollapsed}
				toggled={toggled}
				hideNavbar={hideNavbar}
			/>

			<ReactNavbar showSidebar={showSidebar} isCollapsed={isCollapsed} />
		</>
	);
}
