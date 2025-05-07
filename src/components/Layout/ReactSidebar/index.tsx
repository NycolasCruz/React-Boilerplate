import { useEffect, FormEvent } from "react";
import classNames from "clsx";

import { Sidebar, Menu, MenuItem, SubMenu, MenuItemStyles } from "react-pro-sidebar";
import { BsPersonFill, BsPersonFillGear } from "react-icons/bs";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { MdSpaceDashboard } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

import { useWindowDimensions } from "@/hooks/useWindowDimensions";

import "./styles.scss";

type Props = {
	isCollapsed: boolean;
	setIsCollapsed: (setIsCollapsed: boolean) => void;
	toggled: boolean;
	hideNavbar: () => void;
};

type Section = {
	sectionName: string;
};

export function ReactSidebar({ isCollapsed, setIsCollapsed, toggled, hideNavbar }: Props) {
	const { width } = useWindowDimensions();

	const widthBelowWide = width < 769;

	const Section = ({ sectionName }: Section) => {
		if (!isCollapsed) {
			return (
				<div className="mb-2 px-6">
					<p className="text-xs font-semibold leading-5 opacity-70 tracking-wider">{sectionName}</p>
				</div>
			);
		}

		return <div className="mb-10" />;
	};

	const buttonStyles: MenuItemStyles = {
		button: ({ level }) => {
			const mouseOverStyles = { "&:hover": { backgroundColor: "#18212e" } };

			if (level === 0) {
				return mouseOverStyles;
			}

			return {
				backgroundColor: "#222d3b",
				...mouseOverStyles,
			};
		},
	};

	function handleSidebarCollapse(event: FormEvent<HTMLButtonElement>) {
		const icon = event.currentTarget;
		icon?.classList.toggle("-rotate-180");

		setIsCollapsed(!isCollapsed);
	}

	useEffect(() => {
		if (widthBelowWide) {
			setIsCollapsed(false);
			hideNavbar();
		}
	}, [width]);

	return (
		<>
			<Sidebar
				className="h-screen border-r-0"
				collapsed={isCollapsed}
				toggled={toggled}
				breakPoint="md"
				backgroundColor="#1f2937"
				onBackdropClick={hideNavbar}
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
									<IoCloseSharp className="text-2xl cursor-pointer -mt-5" onClick={hideNavbar} />
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

					<Section sectionName="Geral" />

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
			</Sidebar>
		</>
	);
}
