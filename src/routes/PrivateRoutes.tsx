import { Route, Routes } from "react-router";

import { ManagementRoutes } from "./TabRoutes/ManagementRoutes";
import { Dashboard } from "@/pages/Dashboard";
import { Profile } from "@/pages/Profile";
import { Error } from "@/pages/Error";

export function PrivateRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/perfil" element={<Profile />} />
			<Route path="/gerencia/*" element={<ManagementRoutes />} />

			{/* page not found */}
			<Route path="*" element={<Error />} />
		</Routes>
	);
}
