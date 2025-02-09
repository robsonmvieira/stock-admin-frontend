import { Switch } from "@/components/ui/switch"

import type { CategoryEntity } from "@modules/category/domain/entities"
import { ListAction } from "@shared/application/components/Lists"
import type { ColumnDef } from "@tanstack/react-table"

export type CategoryColumnsType = CategoryEntity & {
	id: string
	name: string
	image: string
	featuredCategory: boolean
}

export function useCategoryColumns(
	onEdit: (data: CategoryColumnsType) => void,
	onDelete: (data: CategoryColumnsType) => void,
	onFeatured: (data: CategoryColumnsType) => void,
	categoryList: CategoryEntity[] | []
): {
	columns: ColumnDef<CategoryColumnsType>[]
	collection: CategoryColumnsType[]
} {
	const collection = categoryList?.map(item => ({
		id: item.id,
		name: item.name,
		image: item.image,
		featuredCategory: item.featuredCategory
	})) as CategoryColumnsType[]
	return {
		collection,
		columns: [
			{
				accessorKey: "id",
				header: "ID",
				cell: ({ row }) => <span>{row.id.substring(0, 5)}</span>
			},
			{
				accessorKey: "name",
				header: "Name"
			},
			{
				accessorKey: "Image",
				cell: ({ row }) => (
					<img
						src={"https://picsum.photos/200/300"}
						alt={row.original.name}
						className='w-10 h-10 object-cover rounded-md'
					/>
				)
			},
			{
				accessorKey: "FeaturedCategory",
				cell: ({ row }) => {
					const item = row.original
					return (
						<div className={"flex items-center pl-10"}>
							<Switch
								className='data-[state=checked]:bg-blue-400 data-[state=unchecked]:bg-slate-700'
								checked={row.original.featuredCategory}
								onCheckedChange={() => onFeatured(item)}
							/>
						</div>
					)
				}
			},
			{
				accessorKey: "Actions",
				cell: ({ row }) => {
					const item = row.original
					return (
						<ListAction<CategoryColumnsType>
							item={item}
							onDelete={() => onDelete(item)}
							onEdit={() => onEdit(item)}
						/>
					)
				}
			}
		]
	}
}
