import { Card } from "flowbite-react";

type Props = {
	title: string;
	description: string;
};

export function DefaultCard({ title, description }: Props) {
	return (
		<Card className="max-w-sm">
			<h5 className="font-bold text-2xl text-white tracking-tight">{title}</h5>
			<p className="font-normal text-gray-400">{description}</p>
		</Card>
	);
}
