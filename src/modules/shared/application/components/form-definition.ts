import type { FieldError, UseFormRegister } from "react-hook-form"

export type CreateCategoryFormData = {
	name: string
	rootCategoryId?: string
	image?: string
	featuredCategory: boolean
}

export type ValidatedFieldsName = keyof CreateCategoryFormData

export type FormFieldProps = {
	type: string
	placeholder: string
	name: ValidatedFieldsName
	register: UseFormRegister<FormData>
	error: FieldError | undefined
	valueAsNumber?: boolean
}
