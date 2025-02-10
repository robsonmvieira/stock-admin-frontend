import type { CategoryEntity } from "@modules/category/domain/entities"
import type { BaseResponse } from "@modules/core/domain/entities"

export interface ICategoryRepository {
	save(category: CategoryEntity): Promise<void>
	update(category: CategoryEntity): Promise<void>
	delete(categoryId: string): Promise<void>
	findById(categoryId: string): Promise<BaseResponse<CategoryEntity>>
	list(): Promise<BaseResponse<CategoryEntity[]>>
}
