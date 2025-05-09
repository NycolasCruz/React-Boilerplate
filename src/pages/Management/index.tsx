import { DefaultCard } from "@/components/DefaultCard";

export function Management() {
	return (
		<>
			<DefaultCard>
				<DefaultCard.Title>Gerência</DefaultCard.Title>
				<DefaultCard.Description>Descrição da gerência</DefaultCard.Description>
			</DefaultCard>

			<button>Empresas</button>
			<button>Funcionários</button>
		</>
	);
}
