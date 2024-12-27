type Props = {
	list: string[];
	setList?: (list: string[]) => void;
	removeButton?: boolean;
};

export function List({ list, setList, removeButton }: Props) {
	function handleTheRemovalOfTheItemFromTheList(index: number) {
		const updatedList = [...list];

		updatedList.splice(index, 1);
		if (setList) {
			setList(updatedList);
		}
	}

	return (
		<ul>
			{removeButton ? (
				<>
					{list.map((item, index) => (
						<li key={`item-${index}`}>
							{item}{" "}
							<button onClick={() => handleTheRemovalOfTheItemFromTheList(index)}>Remover</button>
						</li>
					))}
				</>
			) : (
				<>
					{list.map((item, index) => (
						<li key={`item-${index}`}>{item}</li>
					))}
				</>
			)}
		</ul>
	);
}
