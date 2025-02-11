import "reflect-metadata"
import type { ICategoryRepository } from "@modules/category/domain/repositories"
import { BaseResponse } from "@modules/core/domain/entities"
import { Types } from "@modules/core/infra/types.ts"
import { inject, injectable } from "inversify"

@injectable()
export class FeaturedCategoryUseCase {
	@inject(Types.ICategoryRepository)
	private categoryRepository: ICategoryRepository
	async execute(categoryId: string): Promise<BaseResponse<void>> {
		const response = await this.categoryRepository.featuredCategory(categoryId)
		const baseResponse = new BaseResponse<null>()
		baseResponse.createdAt = response?.createdAt ?? new Date()
		baseResponse.hasError = response?.hasError ?? false
		baseResponse.data = null
		return baseResponse as BaseResponse<void>
	}
}
