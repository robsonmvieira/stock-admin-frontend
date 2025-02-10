import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from "@/components/ui/chart.tsx"
import { TrendingDown } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

const chartConfigPier = {
	visitors: {
		label: "Visitors"
	},
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
	},
	edge: {
		label: "Edge",
		color: "hsl(var(--chart-4))"
	},
	other: {
		label: "Other",
		color: "hsl(var(--chart-5))"
	}
} satisfies ChartConfig

const chartDataPier = [
	{ browser: "chrome", visitors: 275, fill: "#2563eb" },
	{ browser: "safari", visitors: 200, fill: "#eee" }
]

export function ProductShare() {
	return (
		<div className='bg-white rounded-xl p-4 flex'>
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
			<ChartContainer
				config={chartConfigPier}
				className='aspect-square max-h-[170px] flex-1'
			>
				<PieChart>
					<ChartTooltip
						cursor={false}
						content={<ChartTooltipContent hideLabel />}
					/>
					<Pie
						data={chartDataPier}
						dataKey='visitors'
						nameKey='browser'
						innerRadius={60}
						strokeWidth={5}
					>
						<Label
							content={({ viewBox }) => {
								if (viewBox && "cx" in viewBox && "cy" in viewBox) {
									return (
										<text
											x={viewBox.cx}
											y={viewBox.cy}
											textAnchor='middle'
											dominantBaseline='middle'
										>
											<tspan
												x={viewBox.cx}
												y={viewBox.cy}
												className='fill-foreground text-3xl font-bold'
											>
												75%
											</tspan>
										</text>
									)
								}
							}}
						/>
					</Pie>
				</PieChart>
			</ChartContainer>
		</div>
	)
}
