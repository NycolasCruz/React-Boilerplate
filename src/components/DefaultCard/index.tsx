import { Card } from "flowbite-react";

export function DefaultCard({ title, description }: DefaultCard) {
	return (
		<Card className="max-w-sm">
			<h5 className="font-bold text-2xl text-white tracking-tight">{title}</h5>
			<p className="font-normal text-gray-400">{description}</p>
		</Card>
	);
}
