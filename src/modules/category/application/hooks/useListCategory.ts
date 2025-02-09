import "reflect-metadata"
import type { ListCategoriesUseCase } from "@modules/category/application/useCases"
import type { CategoryEntity } from "@modules/category/domain/entities"
import type { SelectOptions } from "@modules/core/domain/entities"
import { Types } from "@modules/core/infra/types"
import { container } from "@shared/infra/dependency-injection/container"
import { useQuery } from "@tanstack/react-query"

export function useListCategory() {
	const listCategoryUseCase = container.get<ListCategoriesUseCase>(
		Types.ListCategoryUseCase
	)

	return useQuery({
		queryKey: ["listCategory"],
		queryFn: async () => {
			const response = await listCategoryUseCase.execute()
			return {
				categoryOptions: buildCategoryOptions(response.data),
				response
			}
		},
		staleTime: 120000
	})
}

const buildCategoryOptions = (data: CategoryEntity[]) => {
	return data?.map(category => ({
		value: category.id,
		label: category.name
	})) as SelectOptions[] | []
}
