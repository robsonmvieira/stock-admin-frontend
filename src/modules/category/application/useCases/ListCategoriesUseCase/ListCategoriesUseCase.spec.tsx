import { ListCategoriesUseCase } from "@modules/category/application/useCases"
import { CategoryEntity } from "@modules/category/domain/entities"
import type { ICategoryRepository } from "@modules/category/domain/repositories"
import { BaseResponse } from "@modules/core/domain/entities"
import type { Mock } from "vitest"

// Mock para o repositório
const mockCategoryRepository: ICategoryRepository = {
	save: vi.fn(),
	update: vi.fn(),
	delete: vi.fn(),
	findById: vi.fn(),
	list: vi.fn(),
	featuredCategory: vi.fn()
}

describe("ListCategoryUseCase", () => {
	let listCategoriesUseCase: ListCategoriesUseCase
	beforeEach(() => {
		vi.clearAllMocks()
		listCategoriesUseCase = new ListCategoriesUseCase()
		// biome-ignore lint/complexity/useLiteralKeys: <explanation>
		listCategoriesUseCase["categoryRepository"] = mockCategoryRepository
	})
	it("deve retornar uma lista de categorias", async () => {
		const mockCategories = [
			new CategoryEntity({
				id: "1",
				name: "Category 1",
				rootCategoryId: "valid-root-category-id",
				featuredCategory: true
			}),
			new CategoryEntity({
				id: "2",
				name: "Category 2",
				rootCategoryId: "1",
				featuredCategory: false
			})
		]

		// Configurar o mock a função `find` para retornar as categorias exemplo
		;(mockCategoryRepository.list as Mock).mockResolvedValue({
			createdAt: new Date(),
			data: mockCategories,
			hasError: false,
			totalItems: mockCategories.length
		})

		// Act: executar o caso de uso
		const result = await listCategoriesUseCase.execute()

		// Agora comparamos o `.data` do `BaseResponse` com `mockCategories`
		expect(result.data).toEqual(mockCategories)
		expect(result.hasError).toBe(false)
		expect(result.totalItems).toBe(mockCategories.length)
	})

	it("deve retornar uma lista vazia se não houver categorias", async () => {
		;(
			mockCategoryRepository.list as ReturnType<typeof vi.fn>
		).mockResolvedValue(BaseResponse<[]>)

		// Act: executar o caso de uso
		const result = await listCategoriesUseCase.execute()
		// Assert: garantir que `list` foi chamado e o retorno foi uma lista vazia
		expect(mockCategoryRepository.list).toHaveBeenCalledTimes(1)
		expect(result.data).toEqual([])
	})
})
