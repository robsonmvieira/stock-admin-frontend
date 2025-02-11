import type { ICategoryRepository } from "@modules/category/domain/repositories"

import { FeaturedCategoryUseCase } from "@modules/category/application/useCases/FeaturedCategoryUseCase"
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

describe("FeaturedCategoryUseCase", () => {
	let featuredCategoryUseCase: FeaturedCategoryUseCase
	beforeEach(() => {
		vi.clearAllMocks()
		featuredCategoryUseCase = new FeaturedCategoryUseCase()
		// biome-ignore lint/complexity/useLiteralKeys: <explanation>
		featuredCategoryUseCase["categoryRepository"] = mockCategoryRepository
	})
	it("should change featuredCategory property value called featuredCategory from repo", async () => {
		// Configurar o mock a função `find` para retornar as categorias exemplo
		;(mockCategoryRepository.featuredCategory as Mock).mockResolvedValue({
			createdAt: new Date(),
			data: null,
			hasError: false
		})

		// Act: executar o caso de uso
		const result = await featuredCategoryUseCase.execute("valid-id")
		expect(result.data).toBeNull()
		expect(result.hasError).toBe(false)
		expect(mockCategoryRepository.featuredCategory).toBeCalledTimes(1)
	})

	it("should return error when featuredCategory property value called featuredCategory from repo", async () => {
		// Configurar o mock a função `find` para retornar as categorias exemplo
		;(mockCategoryRepository.featuredCategory as Mock).mockResolvedValue({
			createdAt: new Date(),
			data: null,
			hasError: true
		})

		// Act: executar o caso de uso
		const result = await featuredCategoryUseCase.execute("invalid-id")
		expect(result.data).toBeNull()
		expect(result.hasError).toBe(true)
		expect(mockCategoryRepository.featuredCategory).toBeCalledTimes(1)
	})
})
