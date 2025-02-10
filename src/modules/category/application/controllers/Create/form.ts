import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
	name: z
		.string()
		.nonempty({ message: "Name is required" })
		.min(3, { message: "Name must be at least 3 characters" }),
	featuredCategory: z.boolean().default(false),
	rootCategoryId: z.string().optional(),
	image: z.any().optional()
})

export type FormData = z.infer<typeof formSchema>

export const useFormBuilder = () => {
	return useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			featuredCategory: false,
			rootCategoryId: "",
			image: undefined
		}
	})
}
