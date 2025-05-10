import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import { Employees } from "./pages/Management/Employees";
import { Business } from "./pages/Management/Business";
import { Dashboard } from "./pages/Dashboard";
import { Profile } from "./pages/Profile";
import { Error } from "./pages/Error";
import { Layout } from "./layout";

export function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			errorElement: <Error />,
			children: [
				{ path: "/", element: <Dashboard /> },
				{ path: "/perfil", element: <Profile /> },
				{ path: "/gerencia/funcionarios", element: <Employees /> },
				{ path: "/gerencia/empresas", element: <Business /> },
			],
		},
	]);

	function setDefaultTheme() {
		const html = document.getElementById("html") as HTMLHtmlElement;

		html.className = "dark";
	}

	useEffect(() => {
		setDefaultTheme();
	}, []);

	return <RouterProvider router={router} />;
}
