import { useState, useEffect } from "react";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

import { useWindowDimensions } from "@/hooks/useWindowDimensions";

import "./styles.scss";

export function ReactSidebar() {
	const [collapsed, setCollapsed] = useState(false);
	const [toggled, setToggled] = useState(false);
	const { width } = useWindowDimensions();

	const showSidebar = () => setToggled(true);
	const hideNavbar = () => setToggled(false);
	const collapseNavbar = () => setCollapsed(!collapsed);
	const widthMd = width < 769;

	useEffect(() => {
		if (widthMd) {
			setCollapsed(false);
			hideNavbar();
		}
	}, [width]);

	return (
		<>
			<Sidebar
				className="h-screen"
				collapsed={collapsed}
				toggled={toggled}
				breakPoint="md"
				backgroundColor="#1f2937"
				onBackdropClick={hideNavbar}
			>
				<Menu>
					<div className="flex items-center justify-between mt-5 mb-3 px-3">
						{!collapsed && <h1 className="font-bold text-2xl">BOILERPLATE</h1>}

						{width > 768 && (
							<button className="mt-1" onClick={collapseNavbar}>
								<RiArrowRightDoubleFill className="text-3xl hover:text-sky-500 duration-150" />
							</button>
						)}
					</div>

					<MenuItem> Dashboard </MenuItem>
					<MenuItem> Perfil </MenuItem>
					<SubMenu label="Gerência">
						<MenuItem> Lojas </MenuItem>
						<MenuItem> Empresas </MenuItem>
					</SubMenu>
				</Menu>
			</Sidebar>

			{widthMd && (
				<button onClick={showSidebar}>
					<GiHamburgerMenu className="text-3xl hover:text-sky-500 duration-150" />
				</button>
			)}
		</>
	);
}
