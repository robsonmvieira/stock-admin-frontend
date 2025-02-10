import {
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem
} from "@/components/ui/sidebar"

export function Header() {
	return (
		<SidebarHeader>
			<SidebarMenu>
				<SidebarMenuItem>
					<SidebarMenuButton size='lg' asChild>
						<div className='flex gap-0.5 leading-none'>
							<span className='font-semibold'>Admin</span>
							<span className=''>v1.0.0</span>
						</div>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarHeader>
	)
}

Header.DisplayName = "Header"
