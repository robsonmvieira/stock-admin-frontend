import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils.ts"
import { useCallback } from "react"

type ToastFeedbacksProps = {
	title: string
	description: string
}

export function useToastFeedbacks() {
	const { toast } = useToast()

	const successNotification = useCallback(
		({ title, description }: ToastFeedbacksProps) => {
			toast({
				className: cn(
					"top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-green-400 border-none"
				),

				title: title,
				description: description
			})
		},
		[toast]
	)

	const errorNotification = useCallback(
		({ title, description }: ToastFeedbacksProps) => {
			toast({
				className: cn(
					"top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-red-400 border-none"
				),
				variant: "destructive",
				title: title,
				description: description
			})
		},
		[toast]
	)

	return { successNotification, errorNotification }
}
