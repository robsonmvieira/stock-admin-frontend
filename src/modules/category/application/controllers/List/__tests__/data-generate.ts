import { useListCategory } from "@modules/category/application/hooks"
import { CategoryEntity } from "@modules/category/domain/entities"
import type { BaseResponse, SelectOptions } from "@modules/core/domain/entities"

const categoryMocked1 = CategoryEntity.create({
	name: "Categoria 1",
	featuredCategory: true
})
export const categoryOptions: SelectOptions[] = [
	{
		value: categoryMocked1.id ?? "fallback-id",
		label: categoryMocked1.name
	}
]

export const response: BaseResponse<CategoryEntity> = {
	data: [categoryMocked1],
	hasError: false,
	totalItems: 1,
	createdAt: new Date()
}

// 🔹 2 Função para criar o mock de `useListCategory`
export const createUseListCategoryMock = () => {
	vi.mocked(useListCategory).mockReturnValue({
		data: { categoryOptions, response },
		isLoading: false,
		isError: false,
		error: null,
		isPending: false,
		isLoadingError: false,
		isRefetchError: false,
		isSuccess: true,
		isPlaceholderData: false,
		status: "success",
		dataUpdatedAt: 0,
		errorUpdatedAt: 0,
		failureCount: 0,
		failureReason: null,
		errorUpdateCount: 0,
		isFetched: true,
		isFetchedAfterMount: false,
		isFetching: false,
		isPaused: false,
		isRefetching: false,
		isStale: false,
		fetchStatus: "idle",
		isInitialLoading: false,
		refetch: vi.fn().mockResolvedValue({}),
		promise: Promise.resolve({ categoryOptions, response })
	})
}
