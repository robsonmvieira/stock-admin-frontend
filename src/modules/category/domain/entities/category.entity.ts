import { Entity } from "@modules/core/domain/entities"
export type CategoryProps = {
	id?: string
	name: string
	featuredCategory: boolean
	rootCategoryId?: string
	image?: File
	products?: string[]
	createdAt?: Date
	updatedAt?: Date | undefined
	deletedAt?: Date | undefined
}

type CreateCategoryCommand = {
	name: string
	featuredCategory: boolean
	rootCategoryId?: string
	image?: File
}

export class CategoryEntity extends Entity {
	name: string
	featuredCategory: boolean
	rootCategoryId?: string
	image?: File
	products: string[]

	constructor({
		id,
		createdAt,
		updatedAt,
		deletedAt,
		name,
		rootCategoryId,
		featuredCategory,
		image,
		products
	}: CategoryProps) {
		super(id, createdAt, updatedAt, deletedAt)
		this.name = name
		this.featuredCategory = featuredCategory
		this.rootCategoryId = rootCategoryId
		this.image = image
		this.products = products ?? []
	}

	static create({
		name,
		rootCategoryId,
		featuredCategory,
		image
	}: CreateCategoryCommand) {
		return new CategoryEntity({ name, rootCategoryId, featuredCategory, image })
	}

	canBeDeleted() {
		return this.products?.length === 0
	}

	canBeFeatured() {
		return this.products?.length > 0
	}

	addProduct(productId: string) {
		this.products.push(productId)
	}

	removeProduct(productId: string) {
		this.products = this.products.filter(id => id !== productId)
	}

	updateName(name: string) {
		this.name = name
	}

	updateImage(image: File) {
		this.image = image
	}

	updateRootCategoryId(rootCategoryId: string) {
		this.rootCategoryId = rootCategoryId
	}

	updateFeaturedCategory() {
		this.featuredCategory = !this.featuredCategory
	}
}
