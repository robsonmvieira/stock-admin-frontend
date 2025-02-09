import "reflect-metadata"
import { inject, injectable } from "inversify"

import type { ICategoryRepository } from "@modules/category/domain/repositories"
import { Types } from "@modules/core/infra/types"
import type { CreateCategoryDto } from "./dtos"

import { CategoryEntity } from "@modules/category/domain/entities"

@injectable()
export class CreateCategoryUseCase {
	@inject(Types.ICategoryRepository)
	private categoryRepository: ICategoryRepository

	async execute({
		name,
		rootCategoryId,
		featuredCategory,
		image
	}: CreateCategoryDto): Promise<void> {
		const category = CategoryEntity.create({
			name,
			featuredCategory,
			image,
			rootCategoryId
		})
		await this.categoryRepository.save(category)
	}
}
