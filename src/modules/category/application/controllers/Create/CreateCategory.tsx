import "reflect-metadata"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import {
	CheckboxField,
	FileUploadField,
	SimpleSelect,
	TextField
} from "@shared/application/components/Forms"

import {
	type FormData,
	useFormBuilder
} from "@modules/category/application/controllers/Create/form"
import { useListCategory } from "@modules/category/application/hooks"

export function CreateCategoryController() {
	const form = useFormBuilder()
	const { data } = useListCategory()

	function onSubmit(values: FormData) {
		console.log("submit:", values)
	}
	return (
		<div className='p-4 bg-gray-50 h-[calc(100%-92px)]'>
			<h2 className='text-xl text-foreground font-medium'>
				{" "}
				Create CategoryEntity
			</h2>

			<div className='p-10 mt-8 bg-white rounded-2xl w-[90%] m-auto'>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<div className='flex flex-col md:flex-row gap-2'>
							<TextField
								control={form.control}
								name='name'
								placeholder={"CategoryEntity name"}
							/>
							<SimpleSelect
								options={data?.categoryOptions || []}
								control={form.control}
								name='rootCategoryId'
								defaultLabel='Select a parent category'
							/>
						</div>
						<div className='mt-4'>
							<FileUploadField
								control={form.control}
								name={"image"}
								placeholder={"CategoryEntity Image"}
							/>
						</div>
						<div className='mt-10'>
							<CheckboxField
								control={form.control}
								name='featuredCategory'
								description='Featured CategoryEntity'
							/>
						</div>
						<Button className='mt-4' type='submit'>
							Save CategoryEntity
						</Button>
					</form>
				</Form>
			</div>
		</div>
	)
}

CreateCategoryController.displayName = "CreateCategoryController"
