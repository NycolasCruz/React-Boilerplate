import { Avatar, Tooltip as FlowbiteTooltip } from "flowbite-react";
import { FiLogOut } from "react-icons/fi";

import { useWindowDimensions } from "@/hooks/useWindowDimensions";

export function ProfileTooltip() {
	const { widthBelowWide } = useWindowDimensions();

	return (
		<FlowbiteTooltip
			className="bg-gray-800 dark:bg-gray-800 border border-gray-700 dark:border-gray-700"
			content={
				<ul className="text-gray-400">
					<div className="py-2 px-4">
						<span>Seu Nome</span>
						<div>seuemail@gmail.com</div>
					</div>

					<div className="h-px bg-gray-600 my-1" />

					<li className="py-1">
						<button className="flex w-full rounded hover:bg-[#18212e] py-1 px-4">Perfil</button>
					</li>

					<li className="py-1">
						<button className="flex w-full rounded hover:bg-[#18212e] py-1 px-4">
							Configurações
						</button>
					</li>

					<div className="h-px bg-gray-600 my-1" />

					<li className="py-1">
						<button className="flex items-center gap-1 w-full rounded hover:bg-[#18212e] py-1 px-4">
							Sair <FiLogOut />
						</button>
					</li>
				</ul>
			}
			trigger={widthBelowWide ? "click" : "hover"}
			arrow={false}
		>
			<Avatar id="user-avatar" alt="user settings" rounded />
		</FlowbiteTooltip>
	);
}
