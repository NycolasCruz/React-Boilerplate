import { Meta, StoryObj } from "@storybook/react";

import { App } from "../App";

export default {
	title: "App",
	component: App,
	decorators: [
		(Story) => (
			<div
				style={{
					display: "flex",
					height: "95vh",
					alignItems: "center",
				}}
			>
				<div id="root">
					<Story />
				</div>
			</div>
		),
	],
} as Meta;

export const Default = {} as StoryObj;
