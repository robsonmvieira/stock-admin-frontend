import "reflect-metadata"
import {
	type CategoryColumnsType,
	useCategoryColumns
} from "@modules/category/application/controllers/List/Components/table/"
import { useListCategory } from "@modules/category/application/hooks"

import { Button } from "@/components/ui/button"
import { CategoryMapper } from "@modules/category/application/mappers"
import { DataTable } from "@modules/dashboard/application/controllers/Home/components"
import { DeleteConfirmationModal } from "@shared/application/components/Dialogs/DeleteConfirmationModal/DeleteConfirmationModal.tsx"
import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"

export function ListCategoriesController() {
	const navigate = useNavigate()
	const { data: categoryList } = useListCategory()
	const [modalOpen, setModalOpen] = useState(false)

	const [categoryToDelete, setCategoryToDelete] =
		useState<CategoryColumnsType | null>(null)

	const categories = categoryList?.response?.data
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
			setModalOpen(true)
			console.log("Delete", item)
		},
		[categories]
	)
	const onFeatured = useCallback(
		(item: CategoryColumnsType) => {
			const categoryFound = categories?.find(cat => cat.id === item.id)
			if (!categoryFound) return
			const category = CategoryMapper.fromApiToDomain(categoryFound)
			category.updateFeaturedCategory()
		},
		[categories]
	)

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
