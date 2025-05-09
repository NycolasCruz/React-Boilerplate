import { ReactNode } from "react";
import { MenuItem as ReactMenuItem } from "react-pro-sidebar";
import { Link } from "react-router";

type Props = {
	to: string;
	name: string;
	icon: ReactNode;
};

export function MenuItem({ to, name, icon }: Props) {
	return (
		<Link to={to}>
			<ReactMenuItem className="text-gray-400" icon={icon}>
				{name}
			</ReactMenuItem>
		</Link>
	);
}
