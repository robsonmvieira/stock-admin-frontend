import { CategoryRepository } from "@modules/category/infra/repositories/category.repository.ts"
import type { BaseResponse } from "@modules/core/domain/entities"
import type { IGatewayContract } from "@modules/core/domain/repositories/gateway.contract"
import type { Mock } from "vitest"
import { CategoryEntity } from "../../domain/entities"

const mockGatewayContract: IGatewayContract = {
	get: vi.fn(),
	post: vi.fn(),
	put: vi.fn(),
	delete: vi.fn(),
	patch: vi.fn()
}

describe("CategoryRepository", () => {
	let categoryRepository: CategoryRepository

	beforeEach(() => {
		vi.clearAllMocks()
		categoryRepository = new CategoryRepository()
		// biome-ignore lint/complexity/useLiteralKeys: <explanation>
		categoryRepository["repo"] = mockGatewayContract // Manually injecting the mock
	})

	it("should save a new category by calling the post method of IGatewayContract", async () => {
		// Arrange
		const category = CategoryEntity.create({
			name: "TestCategory",
			rootCategoryId: undefined,
			featuredCategory: true
		})

		// Act
		await categoryRepository.save(category)

		// Assert
		expect(mockGatewayContract.post).toHaveBeenCalledTimes(1)
		expect(mockGatewayContract.post).toHaveBeenCalledWith(
			"categories",
			category
		)
	})

	it("should update a category by calling the put method of IGatewayContract", async () => {
		// Arrange
		const category = CategoryEntity.create({
			name: "TestCategory",
			rootCategoryId: undefined,
			featuredCategory: true
		})

		// Act
		await categoryRepository.update(category)

		// Assert
		expect(mockGatewayContract.put).toHaveBeenCalledTimes(1)
		expect(mockGatewayContract.put).toHaveBeenCalledWith(
			`categories/${category.id}`,
			category
		)
	})

	it("should delete a category by calling the delete method of IGatewayContract", async () => {
		// Arrange
		const categoryId = "1"

		// Act
		await categoryRepository.delete(categoryId)

		// Assert
		expect(mockGatewayContract.delete).toHaveBeenCalledTimes(1)
		expect(mockGatewayContract.delete).toHaveBeenCalledWith(
			`categories/${categoryId}`
		)
	})

	it("should fetch a category by its ID by calling the get method of IGatewayContract", async () => {
		// Arrange
		const categoryId = "1"
		const mockCategory = new CategoryEntity({
			name: "Category 1",
			rootCategoryId: undefined,
			featuredCategory: true
		})

		const mockResponse: BaseResponse<CategoryEntity> = {
			createdAt: new Date(),
			data: mockCategory,
			hasError: false,
			totalItems: 1
		}
		;(mockGatewayContract.get as Mock).mockResolvedValue(mockResponse)

		// Act
		const result = await categoryRepository.findById(categoryId)

		// Assert
		expect(mockGatewayContract.get).toHaveBeenCalledTimes(1)
		expect(mockGatewayContract.get).toHaveBeenCalledWith(
			`categories/${categoryId}`
		)
		expect(result).toEqual(mockResponse)
	})

	it("should list all categories by calling the get method of IGatewayContract", async () => {
		// Arrange
		const mockCategory = new CategoryEntity({
			name: "Category 1",
			rootCategoryId: undefined,
			featuredCategory: true
		})
		const categoryList = [mockCategory]

		const mockResponse: BaseResponse<CategoryEntity[]> = {
			createdAt: new Date(),
			data: categoryList,
			hasError: false,
			totalItems: categoryList.length
		}
		;(mockGatewayContract.get as Mock).mockResolvedValue(mockResponse)

		// Act
		const result = await categoryRepository.list()

		// Assert
		expect(mockGatewayContract.get).toHaveBeenCalledTimes(1)
		expect(mockGatewayContract.get).toHaveBeenCalledWith("categories")
		expect(result).toEqual(mockResponse)
	})

	it("should mark a category as featured by calling the patch method of IGatewayContract", async () => {
		// Arrange
		const categoryId = "1"

		const mockResponse: BaseResponse<void> = {
			createdAt: new Date(),
			data: undefined,
			hasError: false
		}
		;(mockGatewayContract.patch as Mock).mockResolvedValue(mockResponse)

		// Act
		const result = await categoryRepository.featuredCategory(categoryId)

		// Assert
		expect(mockGatewayContract.patch).toHaveBeenCalledTimes(1)
		expect(mockGatewayContract.patch).toHaveBeenCalledWith(
			`categories/${categoryId}/featured`,
			{
				categoryId
			}
		)
		expect(result).toEqual(mockResponse)
	})
})
