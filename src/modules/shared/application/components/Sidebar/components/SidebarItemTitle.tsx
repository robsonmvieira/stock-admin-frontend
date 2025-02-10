import { CollapsibleTrigger } from "@/components/ui/collapsible"
import { SidebarMenuButton } from "@/components/ui/sidebar.tsx"
import { type LucideIcon, Minus, Plus } from "lucide-react"

interface SidebarItemTitleProps {
	readonly title: string
	readonly icon: LucideIcon
}

export function SidebarItemTitle({ icon, title }: SidebarItemTitleProps) {
	const Icon = icon
	return (
		<CollapsibleTrigger asChild className='mb-2'>
			<SidebarMenuButton>
				<div className='flex items-center'>
					<Icon className='mr-2' />
					<span>{{ icon, title }.title}</span>{" "}
				</div>
				<Plus className='ml-auto group-data-[state=open]/collapsible:hidden' />
				<Minus className='ml-auto group-data-[state=closed]/collapsible:hidden' />
			</SidebarMenuButton>
		</CollapsibleTrigger>
	)
}
SidebarItemTitle.DisplayName = "SidebarItemTitle"
