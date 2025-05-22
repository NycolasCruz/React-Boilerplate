import { useEffect, useState } from "react";
import classNames from "clsx";

import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import { useWindowDimensions } from "@/hooks/useWindowDimensions";

import { ProfileTooltip } from "./ProfileTooltip";
import { SubNavbarTab } from "./SubNavbarTab";
import { NavbarTab } from "./NavbarTab";

import "./styles.scss";

type Props = {
	showSidebar: () => void;
	isCollapsed: boolean;
};

type ThemeMode = "dark" | "light";

export function Navbar({ showSidebar, isCollapsed }: Props) {
	const [isDarkMode, setIsDarkMode] = useState(true);
	const { widthBelowWide } = useWindowDimensions();

	function handleThemeMode(mode: ThemeMode) {
		const html = document.getElementById("html") as HTMLHtmlElement;

		if (mode === "dark") {
			html.className = "dark";
			localStorage.setItem("themeMode", "dark");
			setIsDarkMode(true);

			return;
		}

		html.className = "";
		localStorage.setItem("themeMode", "light");
		setIsDarkMode(false);
	}

	function getDynamicClass() {
		if (isCollapsed && !widthBelowWide) {
			return "ease-in duration-300 pl-[8.57em] pr-14";
		}

		if (!isCollapsed && !widthBelowWide) {
			return "ease-in-out duration-[400ms] pl-[19.2rem] pr-14";
		}

		return "px-8";
	}

	useEffect(() => {
		const { style } = document.documentElement;

		if (isCollapsed) {
			style.setProperty("--body-transition-duration", "300ms");

			return;
		}

		style.setProperty("--body-transition-duration", "400ms");
	}, [isCollapsed]);

	useEffect(() => {
		const elements = document.querySelectorAll("[data-testid='flowbite-tooltip-target']");

		elements.forEach((element) => {
			element.setAttribute("tabindex", "0");
		});

		if (localStorage.themeMode) {
			handleThemeMode(localStorage.themeMode);
		}
	}, []);

	return (
		<div className={classNames("shadow-lg dark:bg-gray-800 py-[1.19rem]", getDynamicClass())}>
			<div className="mx-auto flex flex-wrap items-center justify-between">
				{widthBelowWide && (
					<>
						<button className="mr-[70px]" onClick={showSidebar}>
							<GiHamburgerMenu className="text-3xl duration-150 text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400" />
						</button>

						<div className="flex justify-center">
							<h5 className="font-bold text-gray-500 text-2xl tracking-tight dark:text-gray-300">
								Boilerplate
							</h5>
						</div>
					</>
				)}

				<div className={classNames("w-auto", widthBelowWide ? "hidden" : "block")}>
					<ul className="flex flex-row space-x-8 text-sm font-medium text-gray-500 dark:text-gray-400">
						<NavbarTab name="Dashboard" to="/" />

						<NavbarTab name="Perfil" to="/perfil" />

						<SubNavbarTab tabName="Gerência">
							<SubNavbarTab.MenuItem to="/gerencia/funcionarios">
								Funcionários
							</SubNavbarTab.MenuItem>

							<SubNavbarTab.MenuItem to="/gerencia/empresas">Empresas</SubNavbarTab.MenuItem>
						</SubNavbarTab>
					</ul>
				</div>

				<div className="flex items-center gap-5">
					{isDarkMode ? (
						<button
							className="rounded-lg text-xl text-gray-400 hover:bg-gray-700 focus:bg-gray-700 duration-100 p-2.5"
							onClick={() => handleThemeMode("light")}
						>
							<BsSunFill />
						</button>
					) : (
						<button
							className="rounded-lg text-gray-400 hover:bg-gray-300 focus:bg-gray-300 duration-100 p-3"
							onClick={() => handleThemeMode("dark")}
						>
							<BsMoonStarsFill />
						</button>
					)}

					<ProfileTooltip />
				</div>
			</div>
		</div>
	);
}
