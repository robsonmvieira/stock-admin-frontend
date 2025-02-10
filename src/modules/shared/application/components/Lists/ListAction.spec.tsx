import { fireEvent, render } from "@testing-library/react"

import { beforeAll } from "vitest"
import { ListAction } from "./ListAction"

const editMockFn = vi.fn()
const deleteMockFn = vi.fn()

describe("ListAction", () => {
	beforeAll(() => {
		editMockFn.mockClear()
		deleteMockFn.mockClear()
	})
	it("should render ListAction", async () => {
		const { getByRole, getByText } = render(
			<ListAction<{
				id: "1"
				name: "name"
				image: "image"
				featuredCategory: true
			}>
				onEdit={editMockFn}
				onDelete={deleteMockFn}
				item={{ id: "1", name: "name", image: "image", featuredCategory: true }}
			/>
		)
		const triggerButton = getByRole("button")
		fireEvent.click(triggerButton)

		const editText = await getByText("Editar")
		const deleteText = await getByText("Apagar")
		const editButton = await getByRole("button", { name: "Editar" })
		const deleteButton = await getByRole("button", { name: "Apagar" })

		fireEvent.click(editButton)
		fireEvent.click(deleteButton)

		expect(editMockFn).toHaveBeenCalled()
		expect(deleteMockFn).toHaveBeenCalled()

		expect(editText).toBeDefined()
		expect(deleteText).toBeDefined()
	})
})
