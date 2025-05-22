import { Button } from "flowbite-react";
import { Link } from "react-router";

export function Error() {
	return (
		<div className="flex items-center justify-center min-h-[79vh] px-4">
			<div className="text-center max-w-sm">
				<img src="/404 error.png" alt="Erro 404" />

				<p className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
					Página não encontrada
				</p>

				<p className="text-gray-600 dark:text-gray-400 mt-2">
					Oops! A página que você está procurando não existe
				</p>

				<Link to="/">
					<Button className="w-full mt-4" pill>
						Voltar para a Dashboard
					</Button>
				</Link>
			</div>
		</div>
	);
}
