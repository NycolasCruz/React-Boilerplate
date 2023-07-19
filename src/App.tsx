import { ReactSidebar } from "@/components/ReactSidebar";
import { DefaultCard } from "@/components/DefaultCard";

export function App() {
	return (
		<>
			<ReactSidebar />

			<div className="ml-[17.5rem] py-7">
				<DefaultCard title="Card Principal" description="descrição do card" />
			</div>
		</>
	);
}
