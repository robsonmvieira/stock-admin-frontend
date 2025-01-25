import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import Routers from "@modules/shared/infra/routers/routes"
import { AppSidebar } from "@shared/application/components/Sidebar/Sidebar.tsx"
import { Bell } from "lucide-react"

function App() {
	return (
		<>
			<SidebarProvider>
				<AppSidebar />
				<div className='w-full'>
					<div className='flex justify-between px-4 items-center mt-3 shadow-lg h-20 shadow-gray-900/10 '>
						<SidebarTrigger />
						<div className='flex gap-6 items-center'>
							<Bell className='w-8 h-8 ' />
							<Avatar className='w-10 h-10'>
								<AvatarImage src='https://github.com/shadcn.png' />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</div>
					</div>
					<Routers />
				</div>
			</SidebarProvider>
		</>
	)
}

export default App
