import "reflect-metadata"
import type { CategoryEntity } from "@modules/category/domain/entities"
import type { ICategoryRepository } from "@modules/category/domain/repositories"
import { BaseResponse } from "@modules/core/domain/entities"
import { Types } from "@modules/core/infra/types.ts"
import { inject, injectable } from "inversify"

@injectable()
export class ListCategoriesUseCase {
	@inject(Types.ICategoryRepository)
	private categoryRepository: ICategoryRepository
	async execute(): Promise<BaseResponse<CategoryEntity>> {
		const response = await this.categoryRepository.list()
		const baseResponse = new BaseResponse()
		baseResponse.createdAt = response.createdAt
		baseResponse.hasError = response.hasError
		baseResponse.totalItems = response.data.length
		baseResponse.data = response.data
		return baseResponse as BaseResponse<CategoryEntity>
	}
}
