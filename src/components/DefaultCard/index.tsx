import { PropsWithChildren } from "react";
import { Card } from "flowbite-react";

function DefaultCard({ children }: PropsWithChildren) {
	return <Card className="max-w-sm border-gray-700 bg-gray-800">{children}</Card>;
}

function Title({ children }: PropsWithChildren) {
	return <h5 className="font-bold text-2xl tracking-tight">{children}</h5>;
}

function Description({ children }: PropsWithChildren) {
	return <p className="font-normal text-gray-400">{children}</p>;
}

DefaultCard.Title = Title;
DefaultCard.Description = Description;

export { DefaultCard };
