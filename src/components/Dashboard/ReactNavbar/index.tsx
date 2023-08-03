import classNames from "clsx";

import { Avatar, Dropdown } from "flowbite-react";
import { GiHamburgerMenu } from "react-icons/gi";

import "./styles.scss";

type Props = {
	showSidebar: () => void;
	isCollapsed: boolean;
	width: number;
};

export function ReactNavbar({ showSidebar, isCollapsed, width }: Props) {
	const widthBelowWide = width < 769;

	return (
		<div
			className={classNames(
				"bg-gray-800 duration-150 pe-14 py-[1.19rem]",
				isCollapsed
					? "ease-in duration-300 ps-[8.5rem]"
					: " ease-in-out duration-[400ms] ps-[19.13rem]"
			)}
		>
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
					<ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
						<li>
							<a
								href="#"
								className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white md:border-0 md:hover:bg-transparent md:dark:hover:bg-transparent menu"
							>
								<p>Dashboard</p>
							</a>
						</li>

						<li>
							<a
								href="#"
								className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white md:border-0 md:hover:bg-transparent md:dark:hover:bg-transparent menu"
							>
								Perfil
							</a>
						</li>

						<li>
							<a
								href="#"
								className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white md:border-0 md:hover:bg-transparent md:dark:hover:bg-transparent menu"
							>
								Gerência
							</a>
						</li>
					</ul>
				</div>

				<Dropdown label={<Avatar alt="user settings" rounded />} inline>
					<Dropdown.Header>
						<span className="block text-sm">Alan turing</span>
						<span className="block truncate text-sm font-medium">alan@flowbite.com</span>
					</Dropdown.Header>
					<div>teste 1</div>
					<div>teste 2</div>
					<div>teste 3</div>
					<Dropdown.Divider />
					<div>Sair (icon)</div>
				</Dropdown>
			</div>
		</div>
	);
}
