import { AlertDialog } from "@/components/ui/alert-dialog.tsx"
import type { ReactNode } from "react"

interface BaseModalProps {
	readonly modalOpen: boolean
	readonly setModalOpen: (open: boolean) => void
	readonly children?: ReactNode
}

export function BaseModal({
	modalOpen,
	setModalOpen,
	children
}: BaseModalProps) {
	return (
		<AlertDialog open={modalOpen} onOpenChange={setModalOpen}>
			{children}
		</AlertDialog>
	)
}

BaseModal.displayName = "BaseModal"
