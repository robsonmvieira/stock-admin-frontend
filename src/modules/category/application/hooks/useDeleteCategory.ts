import "reflect-metadata"

import { Types } from "@modules/core/infra/types"
import { container } from "@shared/infra/dependency-injection/container"

import type { DeleteCategoryUseCase } from "@modules/category/application/useCases"
import { queryClient } from "@shared/infra/react-query/client"
import { useMutation } from "@tanstack/react-query"

export function useDeleteCategory() {
	const deleteCategoryUseCase = container.get<DeleteCategoryUseCase>(
		Types.DeleteCategoryUseCase
	)

	return useMutation({
		mutationKey: ["featuredCategory"],
		mutationFn: async (id: string) => {
			return deleteCategoryUseCase.execute(id)
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
