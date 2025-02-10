import { Collapsible } from "@/components/ui/collapsible"
import {
	SidebarMenu as SidebarMenuComponent,
	SidebarMenuItem
} from "@/components/ui/sidebar"
import {
	type Item,
	sidebarOptions
} from "@shared/application/components/Sidebar/sidebarOptions"

import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { SidebarItemSubTitle, SidebarItemTitle } from "../components"

export function SideMenu() {
	const navigate = useNavigate()
	const handleClick = useCallback(
		(element: Item) => {
			navigate(element.url)
		},
		[navigate]
	)
	return (
		<SidebarMenuComponent>
			{sidebarOptions.map(item => (
				<Collapsible
					key={item.title}
					defaultOpen={false}
					className='group/collapsible'
				>
					<SidebarMenuItem>
						<SidebarItemTitle icon={item.Icon} title={item.title} />
						{item.items?.length
							? item.items.map(submenu => (
									<SidebarItemSubTitle
										handleClick={() => handleClick(submenu)}
										title={submenu.title}
										key={submenu.title}
									/>
								))
							: null}
					</SidebarMenuItem>
				</Collapsible>
			))}
		</SidebarMenuComponent>
	)
}
SideMenu.DisplayName = "SideMenu"
