"use client"

import type { ColumnDef } from "@tanstack/react-table"

export type RecentPurchase = {
	id: string
	name: string
	paymentStatus: "pending" | "processing" | "success" | "failed"
	amount: number
}

export const recentPurchaseColumns: ColumnDef<RecentPurchase>[] = [
	{
		accessorKey: "id",
		header: "Order ID"
	},
	{
		accessorKey: "name",
		header: "Product"
	},
	{
		accessorKey: "paymentStatus",
		header: "Payment"
	},
	{
		accessorKey: "amount",
		header: "Amount"
	}
]
