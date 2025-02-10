import type { RecentPurchase } from "@modules/dashboard/application/controllers/Home/components"

export const recentPurchasesFakeData: RecentPurchase[] = [
	{
		id: "1",
		name: "Product A",
		paymentStatus: "success",
		amount: 120.5
	},
	{
		id: "2",
		name: "Product B",
		paymentStatus: "failed",
		amount: 250.0
	},
	{
		id: "3",
		name: "Product C",
		paymentStatus: "processing",
		amount: 75.99
	},
	{
		id: "4",
		name: "Product D",
		paymentStatus: "pending",
		amount: 40.0
	},
	{
		id: "5",
		name: "Product E",
		paymentStatus: "success",
		amount: 199.99
	},
	{
		id: "6",
		name: "Product F",
		paymentStatus: "pending",
		amount: 89.5
	},
	{
		id: "7",
		name: "Product G",
		paymentStatus: "failed",
		amount: 300.75
	},
	{
		id: "8",
		name: "Product H",
		paymentStatus: "processing",
		amount: 49.99
	},
	{
		id: "9",
		name: "Product I",
		paymentStatus: "success",
		amount: 150.25
	},
	{
		id: "10",
		name: "Product J",
		paymentStatus: "pending",
		amount: 60.0
	}
]
