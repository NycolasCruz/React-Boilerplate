import { useEffect, useState } from "react";
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
	const [isDarkMode, setIsDarkMode] = useState(true);
	const { width } = useWindowDimensions();

	const widthBelowWide = width < 769;
	const html = document.querySelector("#html");

	function handleThemeMode(mode: "light" | "dark") {
		if (html) {
			mode === "dark" ? (html.className = "dark") : (html.className = "");
		}

		setIsDarkMode(!isDarkMode);
	}

	function getDynamicClass() {
		if (isCollapsed && !widthBelowWide) {
			return "ease-in duration-300 ps-[8.5rem] pe-14";
		} else if (!isCollapsed && !widthBelowWide) {
			return "ease-in-out duration-[400ms] ps-[19.13rem] pe-14";
		}

		return "px-8";
	}

	useEffect(() => {
		const style = document.documentElement.style;

		if (isCollapsed) {
			style.setProperty("--body-transition-duration", "300ms");
		} else {
			style.setProperty("--body-transition-duration", "400ms");
		}
	}, [isCollapsed]);

	useEffect(() => {
		if (html) {
			html.className = "dark";
		}
	}, []);

	return (
		<div className={classNames("shadow-lg dark:bg-gray-800 py-[1.19rem]", getDynamicClass())}>
			<div className="mx-auto flex flex-wrap items-center justify-between">
				{widthBelowWide && (
					<button onClick={showSidebar}>
						<GiHamburgerMenu className="text-3xl duration-150 text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400" />
					</button>
				)}

				{widthBelowWide && (
					<div className="flex justify-center">
						<h5 className="font-bold text-gray-500 text-2xl tracking-tight dark:text-gray-300">
							Boilerplate
						</h5>
					</div>
				)}

				<div className={classNames("w-auto", widthBelowWide ? "hidden" : "block")}>
					<ul className="flex flex-row space-x-8 text-sm font-medium text-gray-500 dark:text-gray-400">
						<button className="relative hover:text-gray-900 focus:text-gray-900 before:content-[''] before:absolute before:-bottom-[1.9rem] before:left-2/4 before:w-0 before:h-[3px] before:bg-[#8a51ff] before:duration-200 before:ease-out before:-translate-x-1/2 hover:before:w-[150%] focus:before:w-[150%] dark:hover:text-white dark:before:bg-[#ffd700] dark:focus:text-white">
							Dashboard
						</button>

						<button className="relative hover:text-gray-900 focus:text-gray-900 before:content-[''] before:absolute before:-bottom-[1.9rem] before:left-2/4 before:w-0 before:h-[3px] before:bg-[#8a51ff] before:duration-200 before:ease-out before:-translate-x-1/2 hover:before:w-[150%] focus:before:w-[150%] dark:hover:text-white dark:before:bg-[#ffd700] dark:focus:text-white">
							Perfil
						</button>

						<button className="relative hover:text-gray-900 focus:text-gray-900 before:content-[''] before:absolute before:-bottom-[1.9rem] before:left-2/4 before:w-0 before:h-[3px] before:bg-[#8a51ff] before:duration-200 before:ease-out before:-translate-x-1/2 hover:before:w-[150%] focus:before:w-[150%] dark:hover:text-white dark:before:bg-[#ffd700] dark:focus:text-white">
							Gerência
						</button>
					</ul>
				</div>

				<div className="flex items-center gap-5">
					{isDarkMode ? (
						<button
							className="rounded-lg text-xl text-gray-400 hover:bg-gray-700 p-2.5 duration-100"
							onClick={() => handleThemeMode("light")}
						>
							<BsSunFill />
						</button>
					) : (
						<button
							className="rounded-lg text-gray-400 hover:bg-gray-300 p-3 duration-100"
							onClick={() => handleThemeMode("dark")}
						>
							<BsMoonStarsFill />
						</button>
					)}

					<Tooltip
						content={
							<ul className="text-gray-200">
								<div className="py-2 px-4">
									<span className="block">Seu Nome</span>
									<span>seuemail@gmail.com</span>
								</div>

								<div className="my-1 h-px bg-gray-600"></div>

								<li>
									<button className="flex w-full rounded hover:bg-gray-600 py-2 px-4">
										Perfil
									</button>
								</li>

								<li>
									<button className="flex w-full rounded hover:bg-gray-600 py-2 px-4">
										Configurações
									</button>
								</li>

								<div className="my-1 h-px bg-gray-600"></div>

								<li>
									<button
										className="flex items-center gap-1 w-full rounded hover:bg-gray-600 py-2 px-4"
									>
										Sair <FiLogOut />
									</button>
								</li>
							</ul>
						}
						trigger={widthBelowWide ? "click" : "hover"}
						arrow={false}
					>
						<Avatar id="user-avatar" alt="user settings" rounded />
					</Tooltip>
				</div>
			</div>
		</div>
	);
}
