import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { GiHamburgerMenu } from "react-icons/gi";

import "./styles.scss";

type Props = {
	showSidebar: () => void;
	width: number;
};

export function ReactNavbar({ showSidebar, width }: Props) {
	const widthBelowWide = width < 769;

	return (
		<Navbar>
			{widthBelowWide && (
				<button onClick={showSidebar}>
					<GiHamburgerMenu className="text-3xl hover:text-sky-500 duration-150" />
				</button>
			)}

			{widthBelowWide && (
				<Navbar.Brand>
					<h5 className="font-bold text-2xl text-slate-200 tracking-tight">Boilerplate</h5>
				</Navbar.Brand>
			)}

			<Navbar.Collapse>
				<Navbar.Link active href="#">
					<p>Dashboard</p>
				</Navbar.Link>
				<Navbar.Link href="#" className="menu">
					Perfil
				</Navbar.Link>
				<Navbar.Link href="#">Gerência</Navbar.Link>
			</Navbar.Collapse>

			<Dropdown
				inline
				label={
					<Avatar
						alt="User settings"
						img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
						rounded
					/>
				}
			>
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
		</Navbar>
	);
}
