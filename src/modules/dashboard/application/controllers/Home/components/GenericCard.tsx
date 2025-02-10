import { TrendingUp } from "lucide-react"

export function GenericCard() {
	return (
		<div className='bg-white rounded-xl flex flex-col w-full gap-8 flex-1 md:flex-wrap max-h-[130px] '>
			<div className='flex flex-col gap-6 justify-between p-4'>
				<h4 className='text-normal font-medium text-foreground'>Order</h4>

				<div className='flex justify-between items-end'>
					<div className='space-y-2'>
						<h4 className='font-semibold text-xl leading-6 text-foreground'>
							7.450
						</h4>

						<p className='text-sm font-medium leading-6 text-foreground'>440</p>
					</div>
					<div className='flex gap-2 items-center'>
						<TrendingUp className='w-6 h-6 text-green-400' />
						<span className='text-xs font-normal text-green-400'>25,19%</span>
					</div>
				</div>
			</div>
		</div>
	)
}

GenericCard.displayName = "GenericCard"
