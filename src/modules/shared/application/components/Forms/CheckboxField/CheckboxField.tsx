import { Checkbox } from "@/components/ui/checkbox"
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form"

import type { FormFieldProperties } from "@shared/application/components/Forms/FormField/InputFormField"
import { type FieldValues, useController } from "react-hook-form"

export function CheckboxField<TFormValues extends FieldValues>({
	control,
	name,
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
					<div className='flex items-center gap-2'>
						<FormControl>
							<Checkbox
								checked={field.value}
								onCheckedChange={field.onChange}
							/>
						</FormControl>
						{description && (
							<div className='space-y-1 leading-none'>
								<FormLabel>
									<FormDescription>{description}</FormDescription>
								</FormLabel>
							</div>
						)}
					</div>
					{error && <FormMessage>{error.message}</FormMessage>}
				</FormItem>
			)}
		/>
	)
}
CheckboxField.displayName = "CheckboxField"
