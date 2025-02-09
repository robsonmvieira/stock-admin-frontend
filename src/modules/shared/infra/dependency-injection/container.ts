import { Container } from "inversify"

import {
	CreateCategoryUseCase,
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

container.bind<CreateCategoryUseCase>(CreateCategoryUseCase).toSelf()
container
	.bind<ListCategoriesUseCase>(Types.ListCategoryUseCase)
	.to(ListCategoriesUseCase)
export { container }
