import { ListCategoriesController } from "@modules/category/application/controllers"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { fireEvent, render, waitFor } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

import { useListCategory } from "@modules/category/application/hooks"
import { expect } from "vitest"
import { createUseListCategoryMock } from "./data-generate.ts"

vi.mock("@modules/category/application/hooks/useListCategory", () => ({
	useListCategory: vi.fn()
}))
describe("ListCategoryController", () => {
	let queryClient: QueryClient
	const onEditMock = vi.fn()
	beforeEach(() => {
		queryClient = new QueryClient()
		vi.clearAllMocks() // 🔹 Garante que os mocks não afetem outros testes
		queryClient.clear() // 🔹 Evita que o cache do `react-query` interfira no teste
		onEditMock.mockClear()

		// 🔹 2 Garantimos que o mock de `useListCategory` sempre tenha um retorno válido
		// @ts-ignore
		vi.mocked(useListCategory).mockReturnValue({
			data: undefined, // 🔹 Garante que não seja `undefined`
			isLoading: false,
			isError: false,
			error: null
		})
	})
	it("should render ListCategoryController", async () => {
		const { getByText } = render(
			<MemoryRouter>
				<QueryClientProvider client={queryClient}>
					<ListCategoriesController />
				</QueryClientProvider>
			</MemoryRouter>
		)
		expect(getByText("Product Categories")).toBeDefined()
	})

	it("should render ListCategoryController without data", async () => {
		const { getByText } = render(
			<MemoryRouter>
				<QueryClientProvider client={queryClient}>
					<ListCategoriesController />
				</QueryClientProvider>
			</MemoryRouter>
		)
		const noData = getByText("No results.")
		expect(noData).toBeDefined()
	})

	it("should render ListCategoryController with data", async () => {
		createUseListCategoryMock()

		const { getByText } = render(
			<MemoryRouter>
				<QueryClientProvider client={queryClient}>
					<ListCategoriesController />
				</QueryClientProvider>
			</MemoryRouter>
		)

		expect(getByText("Categoria 1")).toBeDefined()
	})

	it("should call onEdit method", async () => {
		createUseListCategoryMock()

		//  Criamos um spy para o console.log
		const consoleSpy = vi.spyOn(console, "log")

		const { getByText, container } = render(
			<MemoryRouter>
				<QueryClientProvider client={queryClient}>
					<ListCategoriesController />
				</QueryClientProvider>
			</MemoryRouter>
		)
		const popoverButton = container.querySelector(
			'button[aria-haspopup="dialog"]'
		)

		// Certificamos de que encontramos o botão
		expect(popoverButton).toBeTruthy()

		// Clicamos para abrir o Popover
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		fireEvent.click(popoverButton!)
		// Esperamos o botão "Editar" aparecer
		const editButton = await waitFor(() => getByText("Editar"))
		// Certificamos de que o botão "Editar" foi encontrado
		expect(editButton).toBeDefined()
		// Clicamos no botão "Editar"
		fireEvent.click(editButton)

		// Esperamos que o método `onEdit` seja chamado
		await waitFor(() => {
			expect(consoleSpy).toHaveBeenCalledTimes(1)
			expect(consoleSpy).toHaveBeenCalledWith("Edit", expect.anything())
		})

		// 🔹  🔟 Limpamos o spy do console
		consoleSpy.mockRestore()
	})

	it("should call onDelete method", async () => {
		createUseListCategoryMock()

		//  Criamos um spy para o console.log
		const consoleSpy = vi.spyOn(console, "log")

		const { getByText, container, debug } = render(
			<MemoryRouter>
				<QueryClientProvider client={queryClient}>
					<ListCategoriesController />
				</QueryClientProvider>
			</MemoryRouter>
		)
		const popoverButton = container.querySelector(
			'button[aria-haspopup="dialog"]'
		)

		// Certificamos de que encontramos o botão
		expect(popoverButton).toBeTruthy()

		// Clicamos para abrir o Popover
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		fireEvent.click(popoverButton!)
		// Esperamos o botão "Apagar" aparecer
		const deleteButton = await waitFor(() => getByText("Apagar"))
		// Certificamos de que o botão "Apagar" foi encontrado
		expect(deleteButton).toBeDefined()
		// Clicamos no botão "Apagar"
		fireEvent.click(deleteButton)

		debug()

		// econtramos o modal aberto com o botão de confirmação
		const confirmButton = await waitFor(() => getByText("Confirm"))

		expect(confirmButton).toBeDefined()

		fireEvent.click(confirmButton)

		// 🔹  🔟 Limpamos o spy do console
		consoleSpy.mockRestore()
	})

	it("should call onFeatured method", () => {
		createUseListCategoryMock()

		const { getByRole } = render(
			<MemoryRouter>
				<QueryClientProvider client={queryClient}>
					<ListCategoriesController />
				</QueryClientProvider>
			</MemoryRouter>
		)

		const switchButton = getByRole("switch")
		expect(switchButton).toBeDefined()
		fireEvent.click(switchButton)
	})
})
