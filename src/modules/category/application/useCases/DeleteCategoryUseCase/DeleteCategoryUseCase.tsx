import "reflect-metadata"

import type { ICategoryRepository } from "@modules/category/domain/repositories"
import { BaseResponse } from "@modules/core/domain/entities"
import { Types } from "@modules/core/infra/types.ts"
import { inject, injectable } from "inversify"

@injectable()
export class DeleteCategoryUseCase {
	@inject(Types.ICategoryRepository)
	private categoryRepository: ICategoryRepository
	async execute(id: string): Promise<BaseResponse<void>> {
		await this.categoryRepository.delete(id)
		const baseResponse = new BaseResponse()
		baseResponse.createdAt = new Date()
		baseResponse.hasError = false
		baseResponse.data = null
		return baseResponse as BaseResponse<void>
	}
}
