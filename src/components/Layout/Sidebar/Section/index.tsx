type Section = {
	isCollapsed: boolean;
	sectionName: string;
};

export function Section({ isCollapsed, sectionName }: Section) {
	if (!isCollapsed) {
		return (
			<div className="mb-2 px-6">
				<p className="text-xs font-semibold leading-5 opacity-70 tracking-wider">{sectionName}</p>
			</div>
		);
	}

	return <div className="mb-10" />;
}
