import { screen, render, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, beforeAll, it } from "vitest";

import { App } from "./App";

describe("manipulating items", () => {
	beforeAll(() => {
		render(<App />);
	});

	it("adding and then removing the item", async () => {
		// first we add the item

		const input = screen.getByLabelText("Adicione um novo item à lista");
		const addButton = screen.getByRole("button", { name: "Adicionar" });

		await userEvent.type(input, "item 1");
		userEvent.click(addButton);

		// now we remove
		const removeButton = await screen.findByRole("button", { name: "Remover" });

		userEvent.click(removeButton);

		await waitForElementToBeRemoved(() => screen.getAllByText("item 1"));
	});
});
