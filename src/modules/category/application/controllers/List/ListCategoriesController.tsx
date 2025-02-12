import "reflect-metadata"
import {
	type CategoryColumnsType,
	useCategoryColumns
} from "@modules/category/application/controllers/List/Components/table/"
import {
	useDeleteCategory,
	useFeaturedCategory,
	useListCategory
} from "@modules/category/application/hooks"

import { Button } from "@/components/ui/button"

import { CategoryMapper } from "@modules/category/application/mappers"
import { DataTable } from "@modules/dashboard/application/controllers/Home/components"
import { DeleteConfirmationModal } from "@shared/application/components/Dialogs/DeleteConfirmationModal/DeleteConfirmationModal"
import { useToastFeedbacks } from "@shared/application/components/Dialogs/Toasts"
import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
export function ListCategoriesController() {
	const navigate = useNavigate()
	const { data: categoryList } = useListCategory()
	const { errorNotification } = useToastFeedbacks()
	const {
		mutate: featureCategoryHandler, // função para chamar a mutation
		//data: mutationData, // último resultado retornado pela mutation
		error: featuredCategoryErrorHandler // erro retornado pela mutation
	} = useFeaturedCategory()

	const { mutate: deleteCategoryHandler, error: deleteCategoryError } =
		useDeleteCategory()

	const [modalOpen, setModalOpen] = useState(false)

	const [categoryToDelete, setCategoryToDelete] =
		useState<CategoryColumnsType | null>(null)

	const categories = categoryList?.response?.data as CategoryColumnsType[]
	const onEdit = useCallback((item: CategoryColumnsType) => {
		console.log("Edit", item)
	}, [])

	const onDelete = useCallback(
		(item: CategoryColumnsType) => {
			const categoryFound = categories?.find(cat => cat.id === item.id)
			if (!categoryFound) return

			const category = CategoryMapper.fromApiToDomain(categoryFound)
			if (category.canBeDeleted()) {
				// call delete method
				console.log("Delete this item", item)
			}
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			deleteCategoryHandler(category.id!)
			setModalOpen(false)
		},
		[categories, deleteCategoryHandler]
	)
	const onFeatured = useCallback(
		(item: CategoryColumnsType) => {
			const categoryFound = categories?.find(cat => cat.id === item.id)
			if (!categoryFound) return
			const category = CategoryMapper.fromApiToDomain(categoryFound)
			category.updateFeaturedCategory()
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			featureCategoryHandler(category.id!)
		},
		[categories, featureCategoryHandler]
	)

	useEffect(() => {
		if (featuredCategoryErrorHandler) {
			errorNotification({
				title: "error",
				description: "Error to update featured category"
			})
		}
	}, [featuredCategoryErrorHandler, errorNotification])

	useEffect(() => {
		if (deleteCategoryError) {
			console.log(deleteCategoryError)
			errorNotification({
				title: "error",
				description: "Error to delete category"
			})
		}
	}, [deleteCategoryError, errorNotification])

	const onAdd = useCallback(() => {
		navigate("/categories/create")
	}, [navigate])

	const handleConfirmationDeleteModal = useCallback(
		(item: CategoryColumnsType) => {
			setCategoryToDelete(item)
			setModalOpen(true)
		},
		[]
	)

	const { columns, collection } = useCategoryColumns(
		onEdit,
		handleConfirmationDeleteModal,
		onFeatured,
		categories || []
	)

	return (
		<>
			<DeleteConfirmationModal
				modalOpen={modalOpen}
				setModalOpen={setModalOpen}
				// biome-ignore lint/style/noNonNullAssertion: <explanation>
				description={categoryToDelete?.name!}
				// biome-ignore lint/style/noNonNullAssertion: <explanation>
				confirmationAction={() => onDelete(categoryToDelete!)}
			/>
			<div className='p-4 bg-gray-50 h-[calc(100%-92px)]'>
				<h2 className='text-xl text-foreground md:ml-20'>Product Categories</h2>
				<div
					className={
						"flex md:justify-end w-full mt-4 md:mt-auto md:w-[90%] m-auto"
					}
				>
					<Button
						className='w-full md:w-auto h-12'
						type={"button"}
						onClick={onAdd}
					>
						+ New Category
					</Button>
				</div>

				<div className='md:p-10 mt-3 bg-white rounded-2xl w-full md:w-[90%] m-auto'>
					<DataTable title={""} columns={columns} data={collection || []} />
				</div>
			</div>
		</>
	)
}

ListCategoriesController.displayName = "ListController"
