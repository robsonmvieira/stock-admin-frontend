import type { ICategoryRepository } from "@modules/category/domain/repositories"
import type { BaseResponse } from "@modules/core/domain/entities"
import type { IGatewayContract } from "@modules/core/domain/repositories/gateway.contract"
import { Types } from "@modules/core/infra/types.ts"
import { inject, injectable } from "inversify"
import type { CategoryEntity } from "../../domain/entities"

@injectable()
export class CategoryRepository implements ICategoryRepository {
	@inject(Types.IGatewayContract)
	private repo: IGatewayContract

	async update(category: CategoryEntity): Promise<void> {
		await this.repo.put(`categories/${category.id}`, category)
	}
	async delete(category: string): Promise<void> {
		await this.repo.delete(`categories/${category}`)
	}
	async findById(categoryId: string): Promise<BaseResponse<CategoryEntity>> {
		return await this.repo.get(`categories/${categoryId}`)
	}
	async list(): Promise<BaseResponse<CategoryEntity[]>> {
		return await this.repo.get("categories")
	}
	async save(category: CategoryEntity): Promise<void> {
		await this.repo.post("categories", category)
	}
}
