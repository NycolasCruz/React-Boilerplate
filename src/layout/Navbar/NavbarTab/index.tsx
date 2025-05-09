import { Link } from "react-router";

type Props = {
	to: string;
	name: string;
};

export function NavbarTab({ to, name }: Props) {
	return (
		<Link
			to={to}
			className="relative hover:text-gray-900 focus:text-gray-900 before:content-[''] before:absolute before:-bottom-[1.9rem] before:left-2/4 before:w-0 before:h-[3px] before:bg-[#8a51ff] before:duration-200 before:ease-out before:-translate-x-1/2 hover:before:w-[150%] focus:before:w-[150%] dark:hover:text-white dark:before:bg-[#ffd700] dark:focus:text-white"
		>
			{name}
		</Link>
	);
}
