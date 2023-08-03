import { useEffect, FormEvent } from "react";
import classNames from "clsx";

import { Sidebar, Menu, MenuItem, SubMenu, MenuItemStyles } from "react-pro-sidebar";
import { BsPersonFill, BsPersonFillGear } from "react-icons/bs";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { MdSpaceDashboard } from "react-icons/md";

import "./styles.scss";

type Props = {
	isCollapsed: boolean;
	setIsCollapsed: (setIsCollapsed: boolean) => void;
	toggled: boolean;
	hideNavbar: () => void;
	width: number;
};

type Section = {
	sectionName: string;
};

export function ReactSidebar({ isCollapsed, setIsCollapsed, toggled, hideNavbar, width }: Props) {
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
							"flex items-center  mt-5 mb-3 px-3",
							isCollapsed ? "justify-center" : "justify-between"
						)}
					>
						{!isCollapsed && (
							<h5 className="font-bold text-2xl text-slate-200 tracking-tight">Boilerplate</h5>
						)}

						{/* collapse button */}
						{!widthBelowWide && (
							<button className="ease-out duration-300 mt-1" onClick={handleSidebarCollapse}>
								<RiArrowLeftDoubleFill className="text-3xl hover:text-sky-500 duration-300" />
							</button>
						)}
					</div>

					<Section sectionName="Geral" />

					<MenuItem
						className="text-slate-400"
						icon={<MdSpaceDashboard className="text-xl text-yellow-350" />}
					>
						Dashboard
					</MenuItem>

					<MenuItem
						className="text-slate-400"
						icon={<BsPersonFill className="text-xl text-yellow-350" />}
					>
						Perfil
					</MenuItem>

					<SubMenu
						className="text-slate-400"
						icon={<BsPersonFillGear className="text-xl text-yellow-350" />}
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
