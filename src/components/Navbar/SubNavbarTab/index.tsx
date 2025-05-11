import { Tooltip as FlowbiteTooltip } from "flowbite-react";

import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { Link } from "react-router";
import { ReactNode } from "react";

type SubNavbarTabProps = {
	tabName: string;
	children: ReactNode;
};

type MenuItemProps = {
	to: string;
	children: ReactNode;
};

function SubNavbarTab({ tabName, children }: SubNavbarTabProps) {
	const { widthBelowWide } = useWindowDimensions();

	return (
		<FlowbiteTooltip
			className="p-0"
			trigger={widthBelowWide ? "click" : "hover"}
			arrow={false}
			content={
				<ul className="text-gray-400 bg-gray-800 border border-gray-700 rounded dark:bg-gray-800 dark:border-gray-700">
					{children}
				</ul>
			}
		>
			<div className="relative hover:text-gray-900 focus:text-gray-900  dark:hover:text-white dark:focus:text-white cursor-pointer">
				{tabName}
			</div>
		</FlowbiteTooltip>
	);
}

function MenuItem({ to, children }: MenuItemProps) {
	return (
		<li>
			<Link
				to={to}
				className="flex w-full rounded hover:bg-[#18212e] focus:bg-[#18212e] py-4 ps-5 pe-12"
			>
				{children}
			</Link>
		</li>
	);
}

SubNavbarTab.MenuItem = MenuItem;

export { SubNavbarTab };
