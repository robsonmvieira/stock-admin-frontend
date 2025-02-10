import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import type { FormFieldProperties } from "@shared/application/components/Forms"
import { type FieldValues, useController } from "react-hook-form"

export function FileUploadField<TFormValues extends FieldValues>({
	control,
	name,
	label
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
						<div className='h-52 border-2 border-dashed bg-blue-50 rounded-xl flex flex-col items-center'>
							<div>
								<p className='text-center font-normal text-sm text-foreground pt-6'>
									Drag and drop your file here
								</p>
								<div>
									<p className='text-center font-normal text-sm text-foreground pt-2'>
										or
									</p>
								</div>
							</div>

							<Input
								id='arquivoId'
								type={"file"}
								className=' mt-4 w-40 hidden border-none focus-visible:ring-0'
								onChange={e => {
									// Você pode manipular `field.onChange(e)` também,
									// mas se quiser exibir o nome, pegue o `e.target.files[0]`
									console.log("Arquivo selecionado:", e.target.files?.[0])
									field.onChange(e.target.files)
								}}
							/>
							<label
								htmlFor='arquivoId'
								className='mt-4 w-40 text-sm font-normal text-center h-10 border-dashed border-2 text-blue-300 py-2 px-4 rounded cursor-pointer'
							>
								Select Files
							</label>
							<div className='mt-4'>
								<p className='text-center text-xs font-normal text-foreground'>
									Drop your files here or click in this area to browse for files
									to upload.
								</p>
							</div>
						</div>
					</FormControl>
					{error && <FormMessage>{error.message}</FormMessage>}
				</FormItem>
			)}
		/>
	)
}
FileUploadField.displayName = "FileUploadField"
