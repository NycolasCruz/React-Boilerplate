import { BrowserRouter, Route, Routes } from "react-router";

import { PrivateRoutes } from "./PrivateRoutes";
import { Layout } from "@/layout";

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/*" element={<PrivateRoutes />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
