import { ReactNode } from "react";
import { MenuItem as ReactMenuItem } from "react-pro-sidebar";
import { Link } from "react-router";

type Props = {
	to: string;
	name: string;
	icon?: ReactNode;
	hideSidebar: (toggled: boolean) => void;
};

export function MenuItem({ to, name, icon, hideSidebar }: Props) {
	return (
		<Link to={to} onClick={() => hideSidebar(true)}>
			<ReactMenuItem className="text-gray-400" icon={icon}>
				{name}
			</ReactMenuItem>
		</Link>
	);
}
