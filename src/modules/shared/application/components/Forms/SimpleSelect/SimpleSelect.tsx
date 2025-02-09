import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"

import type { SelectOptions } from "@modules/core/domain/entities"
import type { FormFieldProperties } from "@shared/application/components/Forms/FormField/InputFormField"
import type { FieldValues } from "react-hook-form"

export type SimpleSelectProps<TFormValues extends FieldValues> =
	FormFieldProperties<TFormValues> & {
		defaultLabel: string
		options: SelectOptions[]
	}

export function SimpleSelect<TFormValues extends FieldValues, T>({
	control,
	name,
	label,
	options = [],
	description,
	defaultLabel
}: SimpleSelectProps<TFormValues>) {
	return (
		<FormField
			control={control}
			name={name}
			render={() => (
				<FormField
					control={control}
					name={name}
					render={({ field }) => (
						<FormItem>
							<FormLabel>{label}</FormLabel>
							<FormControl>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<SelectTrigger>
										<SelectValue placeholder={defaultLabel} />
									</SelectTrigger>
									<SelectContent>
										{options?.map(option => (
											<SelectItem key={option.value} value={option.value}>
												{option.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</FormControl>
							{description && <FormDescription>{description}</FormDescription>}
							<FormMessage />
						</FormItem>
					)}
				/>
			)}
		/>
	)
}
SimpleSelect.displayName = "SimpleSelect"
