import {
	ChartBarStacked,
	ChartNoAxesGantt,
	type LucideIcon
} from "lucide-react"

export type Item = {
	url: string
	title: string
	isActive: boolean
}
export type NabBarItem = {
	title: string
	Icon: LucideIcon
	items: Item[]
}

export const sidebarOptions: NabBarItem[] = [
	{
		title: "Products",
		Icon: ChartNoAxesGantt,
		items: [
			{
				url: "/products",
				title: "Products",
				isActive: false
			},
			{
				url: "/products/create",
				title: "Create Product",
				isActive: false
			},
			{
				url: "/products/review",
				title: "Product reviews",
				isActive: false
			}
		]
	},
	{
		title: "Categories",
		Icon: ChartBarStacked,
		items: [
			{
				url: "/categories",
				title: "Categories",
				isActive: false
			},
			{
				url: "/categories/create",
				title: "Create CategoryEntity",
				isActive: false
			}
		]
	}
]
