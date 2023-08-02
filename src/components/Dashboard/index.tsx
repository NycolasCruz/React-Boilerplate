import { useState } from "react";

import { useWindowDimensions } from "@/hooks/useWindowDimensions";

import { ReactSidebar } from "@/components/Dashboard/ReactSidebar";
import { ReactNavbar } from "@/components/Dashboard/ReactNavbar";

type Props = {
	isCollapsed: boolean;
	setIsCollapsed: (isCollapsed: boolean) => void;
};

export function Dashboard({ isCollapsed, setIsCollapsed }: Props) {
	const [toggled, setToggled] = useState(false);
	const { width } = useWindowDimensions();

	const showSidebar = () => setToggled(true);
	const hideNavbar = () => setToggled(false);

	return (
		<>
			<ReactSidebar
				isCollapsed={isCollapsed}
				setIsCollapsed={setIsCollapsed}
				toggled={toggled}
				hideNavbar={hideNavbar}
				width={width}
			/>

			<ReactNavbar showSidebar={showSidebar} width={width} />
		</>
	);
}
