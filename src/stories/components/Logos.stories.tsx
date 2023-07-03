import { Logos } from "@/components/Logos";
import { Meta, StoryObj } from "@storybook/react";

export default {
	title: "Components/Logos",
	component: Logos,
	decorators: [
		(Story) => (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "85vh",
				}}
			>
				<Story />
			</div>
		),
	],
} as Meta;

export const Default = {} as StoryObj;
