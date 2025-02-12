import type { ICategoryRepository } from "@modules/category/domain/repositories"

import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase"

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

describe("DeleteCategoryUseCase", () => {
	let deleteCategoryUseCase: DeleteCategoryUseCase
	beforeEach(() => {
		vi.clearAllMocks()
		deleteCategoryUseCase = new DeleteCategoryUseCase()
		// biome-ignore lint/complexity/useLiteralKeys: <explanation>
		deleteCategoryUseCase["categoryRepository"] = mockCategoryRepository
	})
	it("should delete a category correctly", async () => {
		// Configurar o mock a função delete para retornar as categorias exemplo
		;(mockCategoryRepository.delete as Mock).mockResolvedValue({
			createdAt: new Date(),
			data: null,
			hasError: false
		})

		// Act: executar o caso de uso
		const result = await deleteCategoryUseCase.execute("valid-id")
		expect(result.data).toBeNull()
		expect(result.hasError).toBe(false)
		expect(mockCategoryRepository.delete).toBeCalledTimes(1)
	})
})
