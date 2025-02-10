import type { ColumnDef } from "@tanstack/react-table"

export type StockOutProduct = {
	id: string
	name: string
	stock: number
	amount: number
}

export const stockOutProductColumns: ColumnDef<StockOutProduct>[] = [
	{
		accessorKey: "name",
		header: "Name"
	},
	{
		accessorKey: "stock",
		header: "Stock"
	},
	{
		accessorKey: "amount",
		header: "Amount"
	}
]
