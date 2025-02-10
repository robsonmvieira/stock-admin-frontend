import svgCard from "/assets/svgs/principal-card-home-svg.svg"
export function PrincipalCard() {
	return (
		<div className='bg-white rounded-2xl p-4 flex flex-col gap-8 justify-between '>
			<div>
				<h4 className='text-normal font-semibold text-blue-500'>
					Good Morning, Maruf!
				</h4>
				<p className='text-sm font-normal leading-6 text-foreground'>
					Here’s what happening with your store today!
				</p>
			</div>
			<div className='flex justify-between items-center'>
				<div className=''>
					<div>
						<h4 className='font-semibold text-xl leading-6 text-foreground'>
							700
						</h4>
						<p className='text-sm font-normal leading-6 text-foreground'>
							Today Visit
						</p>
					</div>

					<div>
						<h4 className='font-semibold text-xl leading-6 text-foreground'>
							R$ 4.450,00
						</h4>
						<p className='text-sm font-normal leading-6 text-foreground'>
							Today total sales
						</p>
					</div>
				</div>
				<div className='hidden md:block'>
					<img
						src={svgCard}
						className='w-[195px] h-[171px]'
						alt='svg principal card'
					/>
				</div>
			</div>
		</div>
	)
}

PrincipalCard.displayName = "PrincipalCard"
