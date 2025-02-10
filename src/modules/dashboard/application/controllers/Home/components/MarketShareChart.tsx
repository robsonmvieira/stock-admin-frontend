"use client"

import { TrendingDown } from "lucide-react"
import { RadialBar, RadialBarChart } from "recharts"

import { Card, CardContent } from "@/components/ui/card"
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from "@/components/ui/chart"
const chartData = [
	{ browser: "chrome", visitors: 75, fill: "#2563eb" },
	{ browser: "safari", visitors: 50, fill: "#9898e5" },
	{ browser: "firefox", visitors: 50, fill: "#ffdb00" }
]

const chartConfig = {
	// visitors: {
	// 	label: "Visitors"
	// },
	chrome: {
		label: "Chrome",
		color: "hsl(var(--chart-1))"
	},
	safari: {
		label: "Safari",
		color: "hsl(var(--chart-2))"
	},
	firefox: {
		label: "Firefox",
		color: "hsl(var(--chart-3))"
	}
	// edge: {
	// 	label: "Edge",
	// 	color: "hsl(var(--chart-4))"
	// }
	// other: {
	// 	label: "Other",
	// 	color: "hsl(var(--chart-5))"
	// }
} satisfies ChartConfig

export function MarketShareChart() {
	return (
		<div className='bg-white rounded-xl flex p-4'>
			<div className='flex flex-col gap-6 justify-between'>
				<h4 className='text-normal font-medium text-foreground'>
					Product Share
				</h4>

				<div className='flex justify-between items-end'>
					<div className='space-y-2'>
						<h4 className='font-normal text-xl leading-6 text-foreground'>
							19.74%
						</h4>
						<div className='flex gap-2 items-center'>
							<TrendingDown className='w-6 h-6 text-rose-400' />
							<span className='text-xs font-normal text-rose-400'>4,89%</span>
						</div>
					</div>
				</div>
			</div>
			<Card className='border-none flex-1'>
				<CardContent>
					<ChartContainer
						config={chartConfig}
						className='mx-auto aspect-square max-h-[200px]'
					>
						<RadialBarChart data={chartData} innerRadius={30} outerRadius={110}>
							<ChartTooltip
								cursor={false}
								content={<ChartTooltipContent hideLabel nameKey='browser' />}
							/>
							<RadialBar dataKey='visitors' background />
						</RadialBarChart>
					</ChartContainer>
				</CardContent>
			</Card>
		</div>
	)
}

MarketShareChart.displayName = "MarketShareChart"
