import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card"
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from "@/components/ui/chart"
const chartData = [
	{ month: "January", desktop: 186, mobile: 80 },
	{ month: "February", desktop: 305, mobile: 200 },
	{ month: "March", desktop: 237, mobile: 120 },
	{ month: "April", desktop: 73, mobile: 190 },
	{ month: "May", desktop: 209, mobile: 130 },
	{ month: "June", desktop: 214, mobile: 140 }
]

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "#2563eb"
	},
	mobile: {
		label: "Mobile",
		color: "#ddd"
	}
} satisfies ChartConfig

export function MultipleBarChart() {
	return (
		<Card className='border-none'>
			<CardHeader>
				<CardTitle className='text-foreground font-medium text-normal'>
					Analytics
				</CardTitle>
				<CardDescription>January - June 2024</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart accessibilityLayer data={chartData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='month'
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={value => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator='dashed' />}
						/>
						<Bar dataKey='desktop' fill='var(--color-desktop)' radius={4} />
						<Bar dataKey='mobile' fill='var(--color-mobile)' radius={4} />
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
MultipleBarChart.DisplayName = "MultipleBarChart"
