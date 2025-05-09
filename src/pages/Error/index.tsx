import { Button } from "flowbite-react";

export function Error() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-white dark:bg-[#111827] px-4">
			<div className="text-center max-w-md">
				<h1 className="text-6xl font-bold text-blue-600 dark:text-blue-500">404</h1>
				<p className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
					Página não encontrada
				</p>
				<p className="mt-2 text-gray-600 dark:text-gray-400">
					Desculpe, a página que você está procurando não existe.
				</p>
				<div className="mt-6">
					<Button href="/" className="flex gap-4" pill>
						Voltar para a Dashboard
					</Button>
				</div>
			</div>
		</div>
	);
}
