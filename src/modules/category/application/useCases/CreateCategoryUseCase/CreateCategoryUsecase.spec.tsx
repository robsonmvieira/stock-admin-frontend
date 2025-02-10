import type { ICategoryRepository } from "@modules/category/domain/repositories"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"
import type { CreateCategoryDto } from "./dtos"

// Mock do repositório injetado
const mockCategoryRepository: ICategoryRepository = {
	save: vi.fn(),
	update: vi.fn(),
	delete: vi.fn(),
	findById: vi.fn(),
	list: vi.fn()
}

describe("CreateCategoryUseCase", () => {
	it("should call save method ", async () => {
		const createCategoryUseCase = new CreateCategoryUseCase()
		// biome-ignore lint/complexity/useLiteralKeys: <explanation>
		createCategoryUseCase["categoryRepository"] = mockCategoryRepository

		const input: CreateCategoryDto = {
			name: "Test Category",
			rootCategoryId: "123",
			featuredCategory: true,
			image: new File(["fake image content"], "image.jpg", {
				type: "image/jpeg"
			})
		}

		await createCategoryUseCase.execute(input)

		// Assert: verificar se a função save foi chamado com os dados corretos
		expect(mockCategoryRepository.save).toHaveBeenCalledWith(
			expect.objectContaining({
				name: "Test Category",
				rootCategoryId: "123",
				featuredCategory: true,
				image: new File(["fake image content"], "image.jpg", {
					type: "image/jpeg"
				})
			})
		)
		expect(mockCategoryRepository.save).toHaveBeenCalledTimes(1)
	})
})
