import { type ChartConfig, ChartContainer } from "@/components/ui/chart.tsx"
import { TrendingDown } from "lucide-react"
import { Bar, BarChart } from "recharts"

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "#2563eb"
	},
	mobile: {
		label: "Mobile",
		color: "#60a5fa"
	}
} satisfies ChartConfig

const chartData = [
	{ month: "January", desktop: 186, mobile: 80 },
	{ month: "February", desktop: 305, mobile: 200 },
	{ month: "March", desktop: 237, mobile: 120 },
	{ month: "April", desktop: 73, mobile: 190 },
	{ month: "May", desktop: 209, mobile: 130 },
	{ month: "June", desktop: 214, mobile: 140 }
]

export function WeeklySales() {
	return (
		<div className='bg-white rounded-xl p-4 flex gap-8 '>
			<div className='flex flex-col gap-6 justify-between'>
				<h4 className='text-normal font-normal text-foreground'>
					Weekly Sales
				</h4>

				<div className='flex justify-between items-end'>
					<div className='space-y-2'>
						<h4 className='font-semibold text-xl leading-6 text-foreground'>
							R$ 4.750,00
						</h4>
						<div className='flex gap-2 items-center'>
							<TrendingDown className='w-6 h-6 text-rose-400' />
							<span className='text-xs font-normal text-rose-400'>2,19%</span>
						</div>
					</div>
				</div>
			</div>
			<ChartContainer
				config={chartConfig}
				className='min-h-[100px] max-w-44 w-full'
			>
				<BarChart accessibilityLayer data={chartData}>
					<Bar dataKey='desktop' fill='var(--color-desktop)' radius={4} />
					<Bar dataKey='mobile' fill='var(--color-mobile)' radius={4} />
				</BarChart>
			</ChartContainer>
		</div>
	)
}

WeeklySales.displayName = "WeeklySales"
