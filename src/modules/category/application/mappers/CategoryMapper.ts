import { CategoryEntity } from "@modules/category/domain/entities"

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class CategoryMapper {
	static fromApiToDomain(category: CategoryEntity): CategoryEntity {
		return new CategoryEntity({
			createdAt: category?.createdAt,
			updatedAt: category?.updatedAt ?? undefined,
			id: category?.id,
			name: category?.name,
			featuredCategory: !category?.featuredCategory,
			image: category?.image,
			rootCategoryId: category?.rootCategoryId,
			products: category?.products,
			deletedAt: category?.deletedAt ?? undefined
		})
	}
}
