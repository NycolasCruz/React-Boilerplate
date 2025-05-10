import { Route, Routes } from "react-router";

import { Employees } from "@/pages/Management/Employees";
import { Business } from "@/pages/Management/Business";
import { Error } from "@/pages/Error";

export function ManagementRoutes() {
	return (
		<Routes>
			<Route path="funcionarios" element={<Employees />} />
			<Route path="empresas" element={<Business />} />

			<Route path="*" element={<Error />} />
		</Routes>
	);
}
