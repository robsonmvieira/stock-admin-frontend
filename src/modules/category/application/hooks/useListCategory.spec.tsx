// create a mock for useListCategory

import { container } from "@shared/infra/dependency-injection/container"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { renderHook, waitFor } from "@testing-library/react"
import { useListCategory } from "./useListCategory"

vi.mock("@shared/infra/dependency-injection/container", () => {
	const mockListCategoriesUseCase = {
		execute: vi.fn()
	}
	return {
		container: {
			get: vi.fn().mockReturnValue(mockListCategoriesUseCase)
		}
	}
})

describe("useListCategory", () => {
	let queryClient: QueryClient
	let mockListCategoriesUseCase: { execute: ReturnType<typeof vi.fn> }
	beforeEach(() => {
		queryClient = new QueryClient()
		mockListCategoriesUseCase = container.get("ListCategoryUseCase")
		mockListCategoriesUseCase.execute.mockReset()
	})
	it("should return category list when successful", async () => {
		mockListCategoriesUseCase.execute.mockResolvedValueOnce({
			data: [
				{ id: "1", name: "Categoria 1" },
				{ id: "2", name: "Categoria 2" }
			]
		})

		// 🔹 4 Renderizamos o hook dentro do QueryClientProvider
		const { result } = renderHook(() => useListCategory(), {
			wrapper: ({ children }) => (
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			)
		})

		// 🔹 5 Esperamos que os dados sejam carregados
		await waitFor(() => expect(result.current.data).toBeDefined())
		expect(result.current.data?.response.data).toEqual([
			{ id: "1", name: "Categoria 1" },
			{ id: "2", name: "Categoria 2" }
		])
	})

	it("should handler API Error", async () => {
		mockListCategoriesUseCase.execute.mockRejectedValueOnce(
			new Error("API Error")
		)

		const { result } = renderHook(() => useListCategory(), {
			wrapper: ({ children }) => (
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			)
		})

		await waitFor(() => expect(result.current.error).toBeDefined())
	})

	it("should be loading state as true", () => {
		const { result } = renderHook(() => useListCategory(), {
			wrapper: ({ children }) => (
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			)
		})

		expect(result.current.isLoading).toBe(true)
	})
})
