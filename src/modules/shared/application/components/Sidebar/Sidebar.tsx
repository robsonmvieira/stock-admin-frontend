import { Sidebar, SidebarContent, SidebarGroup } from "@/components/ui/sidebar"

// import { Dialog } from "@radix-ui/react-dialog"
// import { SheetTitle } from "@/components/ui/sheet"
// import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { Header, SideMenu } from "./components"

export function AppSidebar() {
	return (
		<Sidebar>
			{/*<SheetTitle className='hidden'>*/}
			{/*	<VisuallyHidden>x</VisuallyHidden>*/}
			{/*</SheetTitle>*/}

			<Header />
			<SidebarContent>
				<SidebarGroup>
					<SideMenu />
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	)
}
// https://ui.shadcn.com/blocks/sidebar
