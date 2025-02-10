import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from "@/components/ui/popover"
import { Ellipsis } from "lucide-react"

type ListActionProps<T> = {
	onEdit: (item: T) => void
	onDelete: (item: T) => void
	item: T
}

export function ListAction<T>({ onEdit, onDelete, item }: ListActionProps<T>) {
	return (
		<Popover>
			<PopoverTrigger className={"cursor-pointer"}>
				<Ellipsis className='w-5 h-5' />
			</PopoverTrigger>
			<PopoverContent className='w-26'>
				<div className='grid gap-4'>
					<div className='space-y-2 cursor-pointer'>
						<button
							onClick={() => onEdit(item)}
							type={"button"}
							className='border-none hover:text-blue-400 outline-none  font-medium leading-none text-sm text-foreground'
						>
							Editar
						</button>
					</div>
					<div className='space-y-2 cursor-pointer'>
						<button
							onClick={() => onDelete(item)}
							type={"button"}
							className='border-none hover:text-blue-400 outline-none font-medium leading-none text-sm text-foreground'
						>
							Apagar
						</button>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}
ListAction.displayName = "ListAction"
