import {
	DataTable,
	GenericCard,
	MarketShareChart,
	MultipleBarChart,
	PrincipalCard,
	ProductShare,
	TotalOrderChart,
	WeeklySales,
	recentPurchaseColumns,
	recentPurchasesFakeData,
	stockOutProductColumns,
	stockOutProducts
} from "@modules/dashboard/application/controllers/Home/components"

export function Dashboard() {
	return (
		<div className=' bg-slate-100/40 h-full p-4 flex flex-col gap-6'>
			<div className='w-full mt-10 flex gap-4 flex-col lg:flex-row'>
				<div className='w-full flex-1'>
					<PrincipalCard />
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 w-full lg:w-1/2 gap-4'>
					<GenericCard />
					<GenericCard />
					<GenericCard />
					<GenericCard />
				</div>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
				<WeeklySales />
				<ProductShare />
				<TotalOrderChart />
				<MarketShareChart />
			</div>
			<div>
				<MultipleBarChart />
			</div>
			<div>
				<DataTable
					title='Recent Purchases'
					columns={recentPurchaseColumns}
					data={recentPurchasesFakeData}
				/>
			</div>

			<div>
				<DataTable
					title={"Stock Out Products"}
					columns={stockOutProductColumns}
					data={stockOutProducts}
				/>
			</div>
		</div>
	)
}

Dashboard.DisplayName = "Dashboard"
// https://template.getbazaar.io/vendor/dashboard
