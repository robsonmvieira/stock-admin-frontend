import {
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle
} from "@/components/ui/alert-dialog.tsx"
import { Button } from "@/components/ui/button.tsx"
import { BaseModal } from "@shared/application/components/Dialogs/Modal"

interface DeleteConfirmationModalProps {
	readonly modalOpen: boolean
	readonly setModalOpen: (open: boolean) => void
	readonly description: string
	readonly confirmationAction: VoidFunction
}

export function DeleteConfirmationModal({
	modalOpen,
	setModalOpen,
	description,
	confirmationAction
}: DeleteConfirmationModalProps) {
	return (
		<BaseModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						The {description} will be permanently removed. This action cannot be
						undone.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel asChild>
						<Button variant={"outline"}>Cancel</Button>
					</AlertDialogCancel>
					<AlertDialogAction asChild onClick={confirmationAction}>
						<Button variant={"destructive"}>Confirm </Button>
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</BaseModal>
	)
}
DeleteConfirmationModal.displayName = "DeleteConfirmationModal"
