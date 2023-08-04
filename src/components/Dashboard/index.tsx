import { useState } from "react";

import { ReactSidebar } from "@/components/Dashboard/ReactSidebar";
import { ReactNavbar } from "@/components/Dashboard/ReactNavbar";

type Props = {
	isCollapsed: boolean;
	setIsCollapsed: (isCollapsed: boolean) => void;
};

export function Dashboard({ isCollapsed, setIsCollapsed }: Props) {
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
