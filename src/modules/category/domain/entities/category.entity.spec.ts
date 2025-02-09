import { CategoryEntity } from "@modules/category/domain/entities"
describe("Category Entity", () => {
	it("should create a valid category with constructor", () => {
		// generate in next line a  valid uuid
		const validId = "86b0e8c9-bbfe-4c22-8f94-34c926022fb6"

		// create a valid image random file

		// Criando um arquivo simulado
		const imageContent = new Blob(["fake image content"], {
			type: "image/jpeg"
		})
		const image = new File([imageContent], "image.jpg", { type: "image/jpeg" })

		const category = new CategoryEntity({
			id: validId,
			name: "Category 1",
			featuredCategory: true,
			image,
			products: []
		})

		expect(category).toBeInstanceOf(CategoryEntity)
		expect(category.name).toBe("Category 1")
		expect(category.featuredCategory).toBe(true)
		expect(category.image).toBeInstanceOf(File)
		expect(category.products).toEqual([])
	})

	it("should create a new category using create method", () => {
		const category = CategoryEntity.create({
			name: "Category 1",
			featuredCategory: true,
			image: new File(["fake image content"], "image.jpg", {
				type: "image/jpeg"
			})
		})

		expect(category).toBeInstanceOf(CategoryEntity)
		expect(category.name).toBe("Category 1")
		expect(category.featuredCategory).toBe(true)
		expect(category.image).toBeInstanceOf(File)
		expect(category.products).toEqual([])
	})

	it("should create a category and update its name", () => {
		const category = CategoryEntity.create({
			name: "Category 1",
			featuredCategory: true,
			image: new File(["fake image content"], "image.jpg", {
				type: "image/jpeg"
			})
		})

		category.updateName("Category 2")

		expect(category.name).toBe("Category 2")
	})

	it("should create a category and update its image", () => {
		const category = CategoryEntity.create({
			name: "Category 1",
			featuredCategory: true,
			image: new File(["fake image content"], "image.jpg", {
				type: "image/jpeg"
			})
		})

		const newImage = new File(["new fake image content"], "new-image.jpg", {
			type: "image/jpeg"
		})

		category.updateImage(newImage)

		expect(category.image).toBe(newImage)
	})

	it("should create a category and add a product", () => {
		const category = CategoryEntity.create({
			name: "Category 1",
			featuredCategory: true,
			image: new File(["fake image content"], "image.jpg", {
				type: "image/jpeg"
			})
		})

		category.addProduct("product-id")

		expect(category.products).toEqual(["product-id"])
	})

	it("should create a category and remove a product", () => {
		const category = CategoryEntity.create({
			name: "Category 1",
			featuredCategory: true,
			image: new File(["fake image content"], "image.jpg", {
				type: "image/jpeg"
			})
		})

		category.addProduct("product-id")
		category.removeProduct("product-id")

		expect(category.products).toEqual([])
	})

	it("should create a category and update its root category id", () => {
		const category = CategoryEntity.create({
			name: "Category 1",
			featuredCategory: true,
			image: new File(["fake image content"], "image.jpg", {
				type: "image/jpeg"
			})
		})

		category.updateRootCategoryId("root-category-id")

		expect(category.rootCategoryId).toBe("root-category-id")
	})

	it("should create a category and check if it can be deleted", () => {
		const category = CategoryEntity.create({
			name: "Category 1",
			featuredCategory: true,
			image: new File(["fake image content"], "image.jpg", {
				type: "image/jpeg"
			})
		})

		expect(category.canBeDeleted()).toBe(true)
	})

	it("should create a category and check if it can be featured", () => {
		const category = CategoryEntity.create({
			name: "Category 1",
			featuredCategory: true,
			image: new File(["fake image content"], "image.jpg", {
				type: "image/jpeg"
			})
		})

		expect(category.canBeFeatured()).toBe(false)
	})

	it("should create a category and feature this", () => {
		const category = CategoryEntity.create({
			name: "Category 1",
			featuredCategory: false,
			image: new File(["fake image content"], "image.jpg", {
				type: "image/jpeg"
			})
		})

		category.addProduct("product-id")
		category.updateFeaturedCategory()
		expect(category.featuredCategory).toBe(true)
	})
})
