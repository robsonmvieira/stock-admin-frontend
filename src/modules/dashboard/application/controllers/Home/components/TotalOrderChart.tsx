import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from "@/components/ui/chart.tsx"
import { TrendingDown } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

const areaChartData = [
	{ month: "January", desktop: 186, mobile: 80 },
	{ month: "February", desktop: 305, mobile: 200 },
	{ month: "March", desktop: 237, mobile: 120 },
	{ month: "April", desktop: 73, mobile: 190 },
	{ month: "May", desktop: 209, mobile: 130 },
	{ month: "June", desktop: 214, mobile: 140 }
]

const areaChartConfig = {
	desktop: {
		label: "Desktop",
		color: "#2563eb"
	}
} satisfies ChartConfig
export function TotalOrderChart() {
	return (
		<div className='bg-white rounded-xl p-4 flex'>
			<div className='flex flex-col gap-6 justify-between'>
				<h4 className='text-normal font-medium text-foreground'>Total Order</h4>

				<div className='flex justify-between items-end'>
					<div className='space-y-2'>
						<h4 className='font-normal text-xl leading-6 text-foreground'>
							R$ 195.744,42
						</h4>
						<div className='flex gap-2 items-center'>
							<TrendingDown className='w-6 h-6 text-rose-400' />
							<span className='text-xs font-normal text-rose-400'>4,89%</span>
						</div>
					</div>
				</div>
			</div>
			<ChartContainer config={areaChartConfig}>
				<AreaChart
					accessibilityLayer
					data={areaChartData}
					margin={{
						left: 12,
						right: 12
					}}
				>
					<CartesianGrid vertical={false} />
					<XAxis
						dataKey='month'
						tickLine={false}
						axisLine={false}
						tickMargin={8}
						tickFormatter={value => value.slice(0, 3)}
					/>
					<ChartTooltip cursor={false} content={<ChartTooltipContent />} />
					<defs>
						<linearGradient id='fillDesktop' x1='0' y1='0' x2='0' y2='1'>
							<stop
								offset='5%'
								stopColor='var(--color-desktop)'
								stopOpacity={0.8}
							/>
							<stop
								offset='95%'
								stopColor='var(--color-desktop)'
								stopOpacity={0.1}
							/>
						</linearGradient>
						<linearGradient id='fillMobile' x1='0' y1='0' x2='0' y2='1'>
							<stop
								offset='5%'
								stopColor='var(--color-mobile)'
								stopOpacity={0.8}
							/>
							<stop
								offset='95%'
								stopColor='var(--color-mobile)'
								stopOpacity={0.1}
							/>
						</linearGradient>
					</defs>
					<Area
						dataKey='desktop'
						type='natural'
						fill='url(#fillDesktop)'
						fillOpacity={0.4}
						stroke='var(--color-desktop)'
						stackId='a'
					/>
				</AreaChart>
			</ChartContainer>
		</div>
	)
}

TotalOrderChart.DisplayName = "AreaChartSection"
