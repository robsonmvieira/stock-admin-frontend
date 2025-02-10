import { Button } from "@/components/ui/button"
import { CollapsibleContent } from "@/components/ui/collapsible"
import {
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem
} from "@/components/ui/sidebar"

interface SidebarItemSubTitleProps {
	readonly title: string
	readonly isActive?: boolean
	readonly handleClick?: () => void
}

export function SidebarItemSubTitle({
	handleClick,
	title,
	isActive = false
}: SidebarItemSubTitleProps) {
	return (
		<CollapsibleContent>
			<SidebarMenuSub>
				<SidebarMenuSubItem>
					<SidebarMenuSubButton asChild isActive={isActive}>
						<div className='flex'>
							<span className='w-1 h-1 bg-white rounded-full' />
							<Button
								variant='ghost'
								className='hover:bg-transparent hover:text-white'
								type='button'
								onClick={handleClick}
							>
								{title}
							</Button>
						</div>
					</SidebarMenuSubButton>
				</SidebarMenuSubItem>
			</SidebarMenuSub>
		</CollapsibleContent>
	)
}
SidebarItemSubTitle.DisplayName = "SidebarItemSubTitle"
