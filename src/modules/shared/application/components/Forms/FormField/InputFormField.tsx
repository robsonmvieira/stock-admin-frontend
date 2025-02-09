import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form"
import {
	type Control,
	type FieldValues,
	type Path,
	useController
} from "react-hook-form"

export type FormFieldProperties<TFormValues extends FieldValues> = {
	control: Control<TFormValues>
	name: Path<TFormValues>
	label?: string
	placeholder?: string
	description?: string
	type?: string
}

import { Input } from "@/components/ui/input"
export function TextField<TFormValues extends FieldValues>({
	control,
	name,
	placeholder,
	label,
	description
}: FormFieldProperties<TFormValues>) {
	const {
		field,
		fieldState: { error }
	} = useController({ control, name })
	return (
		<FormField
			control={control}
			name={name}
			render={() => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input
							className='w-full h-14 focus-visible:ring-0'
							placeholder={placeholder}
							// Desestrutura as props do RHF (onChange, value etc.)
							{...field}
						/>
					</FormControl>
					{/* Se quiser mostrar uma descrição abaixo do campo */}
					{description && <FormDescription>{description}</FormDescription>}
					{/* Mensagem de erro (caso exista) */}
					{error && <FormMessage>{error.message}</FormMessage>}
				</FormItem>
			)}
		/>
	)
}

TextField.DisplayName = "TextField"
