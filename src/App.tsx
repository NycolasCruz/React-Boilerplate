import { Logos } from "@/components/Logos";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

export function App() {
	return (
		<>
			<Sidebar>
				<Menu>
					<SubMenu label="Charts">
						<MenuItem> Pie charts </MenuItem>
						<MenuItem> Line charts </MenuItem>
					</SubMenu>
					<MenuItem> Documentation </MenuItem>
					<MenuItem> Calendar </MenuItem>
				</Menu>
			</Sidebar>

			<Logos />
			<h1>React Boilerplate</h1>
		</>
	);
}
