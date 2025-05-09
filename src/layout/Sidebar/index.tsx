import { useEffect, FormEvent } from "react";
import classNames from "clsx";

import { Sidebar as ReactProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { BsPersonFill, BsPersonFillGear } from "react-icons/bs";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { MdSpaceDashboard } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

import { useWindowDimensions } from "@/hooks/useWindowDimensions";

import { Section } from "@/components/Layout/Sidebar/Section";

import { buttonStyles } from "./buttonStyles";
import "./styles.scss";

type Props = {
	isCollapsed: boolean;
	setIsCollapsed: (isCollapsed: boolean) => void;
	toggled: boolean;
	hideSidebar: () => void;
};

export function Sidebar({ isCollapsed, setIsCollapsed, toggled, hideSidebar }: Props) {
	const { width, widthBelowWide } = useWindowDimensions();

	function handleSidebarCollapse(event: FormEvent<HTMLButtonElement>) {
		const icon = event.currentTarget;
		icon?.classList.toggle("-rotate-180");

		setIsCollapsed(!isCollapsed);
	}

	useEffect(() => {
		if (widthBelowWide) {
			setIsCollapsed(false);
			hideSidebar();
		}
	}, [width]);

	return (
		<>
			<ReactProSidebar
				className="h-screen border-r-0"
				collapsed={isCollapsed}
				toggled={toggled}
				breakPoint="md"
				backgroundColor="#1f2937"
				onBackdropClick={hideSidebar}
			>
				<Menu menuItemStyles={buttonStyles}>
					<div
						className={classNames(
							"flex items-center mt-5 mb-3",
							isCollapsed ? "justify-center mr-[0.3rem]" : "justify-between px-3"
						)}
					>
						{!isCollapsed && (
							<>
								<h5 className="font-bold text-2xl tracking-tight">Boilerplate</h5>

								{widthBelowWide && (
									<IoCloseSharp className="text-2xl cursor-pointer -mt-5" onClick={hideSidebar} />
								)}
							</>
						)}

						{/* collapse button */}
						{!widthBelowWide && (
							<button className="ease-out duration-300 mt-1" onClick={handleSidebarCollapse}>
								<RiArrowLeftDoubleFill className="text-3xl hover:text-gray-400 duration-150" />
							</button>
						)}
					</div>

					<Section sectionName="Geral" isCollapsed={isCollapsed} />

					<MenuItem className="text-gray-400" icon={<MdSpaceDashboard className="text-xl" />}>
						Dashboard
					</MenuItem>

					<MenuItem className="text-gray-400" icon={<BsPersonFill className="text-xl" />}>
						Perfil
					</MenuItem>

					<SubMenu
						className="text-gray-400"
						icon={<BsPersonFillGear className="text-xl" />}
						label="Gerência"
					>
						<MenuItem>Empresas</MenuItem>
						<MenuItem>Funcionários</MenuItem>
					</SubMenu>
				</Menu>
			</ReactProSidebar>
		</>
	);
}
