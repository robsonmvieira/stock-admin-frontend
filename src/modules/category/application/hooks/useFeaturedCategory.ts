import "reflect-metadata"
import type { FeaturedCategoryUseCase } from "@modules/category/application/useCases"
import { Types } from "@modules/core/infra/types"
import { container } from "@shared/infra/dependency-injection/container"

import { queryClient } from "@shared/infra/react-query/client"
import { useMutation } from "@tanstack/react-query"

export function useFeaturedCategory() {
	const featuredCategoryUseCase = container.get<FeaturedCategoryUseCase>(
		Types.FeaturedCategoryUseCase
	)

	return useMutation({
		mutationKey: ["featuredCategory"],
		mutationFn: async (id: string) => {
			return featuredCategoryUseCase.execute(id)
		},
		onSuccess: () => {
			// @ts-ignore
			queryClient.invalidateQueries(["listCategory"])
		},
		onError: error => {
			console.error("não rolou => ", error)
		}
	})
}
