import classNames from "clsx";

import { Avatar, Dropdown } from "flowbite-react";
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
						<h5 className="font-bold text-2xl text-slate-200 tracking-tight">Boilerplate</h5>
					</div>
				)}

				<div className={classNames("w-auto", widthBelowWide ? "hidden" : "block")}>
					<ul className="flex flex-row space-x-8 text-sm font-medium">
						<li>
							<a href="#" className="text-gray-400 hover:text-white menu">
								<p>Dashboard</p>
							</a>
						</li>

						<li>
							<a href="#" className="text-gray-400 hover:text-white menu">
								Perfil
							</a>
						</li>

						<li>
							<a href="#" className="text-gray-400 hover:text-white menu">
								Gerência
							</a>
						</li>
					</ul>
				</div>

				<Dropdown label={<Avatar alt="user settings" rounded />} inline>
					<Dropdown.Header>
						<span className="block text-sm">Alan Turing</span>
						<span className="block text-sm font-medium">alan.turing@gmail.com</span>
					</Dropdown.Header>
					<Dropdown.Item>Perfil</Dropdown.Item>
					<Dropdown.Item>Configurações</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item>
						<p className="mr-1">Sair</p> <FiLogOut />
					</Dropdown.Item>
				</Dropdown>
			</div>
		</div>
	);
}
