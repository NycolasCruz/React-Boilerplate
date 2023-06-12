import Select from "react-select";

export function SelectExample() {
	const options: ReactSelectOptions[] = [
		{ value: "1", label: "1" },
		{ value: "2", label: "2" }
	];

	return <Select options={options} placeholder="Selecione..." />;
}
