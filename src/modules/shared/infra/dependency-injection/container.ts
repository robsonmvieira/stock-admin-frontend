import { Container } from "inversify"

import {
	CreateCategoryUseCase,
	FeaturedCategoryUseCase,
	ListCategoriesUseCase
} from "@modules/category/application/useCases"
import type { ICategoryRepository } from "@modules/category/domain/repositories"
import { CategoryRepository } from "@modules/category/infra/repositories/"
import type { IGatewayContract } from "@modules/core/domain/repositories"
import { KyGateway } from "@shared/infra/client-http"
import { Types } from "../../../core/infra/types"

const container = new Container()

container
	.bind<IGatewayContract>(Types.IGatewayContract)
	.to(KyGateway)
	.inSingletonScope()

container
	.bind<ICategoryRepository>(Types.ICategoryRepository)
	.to(CategoryRepository)

container
	.bind<CreateCategoryUseCase>(Types.CreateCategoryUseCase)
	.to(CreateCategoryUseCase)
container
	.bind<ListCategoriesUseCase>(Types.ListCategoryUseCase)
	.to(ListCategoriesUseCase)

container
	.bind<FeaturedCategoryUseCase>(Types.FeaturedCategoryUseCase)
	.to(FeaturedCategoryUseCase)
export { container }
