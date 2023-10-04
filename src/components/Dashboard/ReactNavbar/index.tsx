import classNames from "clsx";

import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { Avatar, Tooltip } from "flowbite-react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";

import { useWindowDimensions } from "@/hooks/useWindowDimensions";

import "./styles.scss";

type Props = {
	showSidebar: () => void;
	isCollapsed: boolean;
};

export function ReactNavbar({ showSidebar, isCollapsed }: Props) {
	const { width } = useWindowDimensions();

	const widthBelowWide = width < 769;

	function getDynamicClass() {
		if (isCollapsed && !widthBelowWide) {
			return "ease-in duration-300 ps-[8.5rem] pe-14";
		} else if (!isCollapsed && !widthBelowWide) {
			return "ease-in-out duration-[400ms] ps-[19.13rem] pe-14";
		}

		return "px-8";
	}

	return (
		<div className={classNames("bg-gray-800 duration-150 py-[1.19rem]", getDynamicClass())}>
			<div className="mx-auto flex flex-wrap items-center justify-between">
				{widthBelowWide && (
					<button onClick={showSidebar}>
						<GiHamburgerMenu className="text-3xl hover:text-sky-500 duration-150" />
					</button>
				)}

				{widthBelowWide && (
					<div className="flex justify-center">
						<h5 className="font-bold text-2xl tracking-tight">Boilerplate</h5>
					</div>
				)}

				<div className={classNames("w-auto", widthBelowWide ? "hidden" : "block")}>
					<ul className="flex flex-row space-x-8 text-sm font-medium text-gray-400 tab-menu">
						<li>Dashboard</li>
						<li>Perfil</li>
						<li>Gerência</li>
					</ul>
				</div>

				<div className="flex items-center gap-5">
					<BsSunFill className="text-2xl text-gray-300 cursor-pointer" />
					<BsMoonStarsFill className="text-xl text-gray-300 cursor-pointer" />

					<Tooltip
						content={
							<ul className="text-gray-200">
								<div className="py-2 px-4">
									<span className="block">Seu Nome</span>
									<span>seuemail@gmail.com</span>
								</div>

								<div className="my-1 h-px bg-gray-600"></div>

								<li>
									<button type="button" className="flex w-full hover:bg-gray-600 py-2 px-4">
										Perfil
									</button>
								</li>

								<li>
									<button type="button" className="flex w-full hover:bg-gray-600 py-2 px-4">
										Configurações
									</button>
								</li>

								<div className="my-1 h-px bg-gray-600"></div>

								<li>
									<button
										type="button"
										className="flex items-center gap-1 w-full hover:bg-gray-600 py-2 px-4"
									>
										Sair <FiLogOut />
									</button>
								</li>
							</ul>
						}
						trigger={widthBelowWide ? "click" : "hover"}
						arrow={false}
					>
						<Avatar alt="user settings" rounded />
					</Tooltip>
				</div>
			</div>
		</div>
	);
}
