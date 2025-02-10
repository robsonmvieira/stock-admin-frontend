import { Dashboard } from "@modules/dashboard/application/controllers"
import {
	CreateProductController,
	LastProductsReviewController,
	Products
} from "@modules/product/application/controllers"

import {
	CreateCategoryController,
	ListCategoriesController
} from "@modules/category/application/controllers"
import { Route, Routes } from "react-router-dom"

const Routers = () => {
	return (
		<Routes>
			<Route path='/products' element={<Products />} />
			<Route path='/products/create' element={<CreateProductController />} />
			<Route
				path='/products/review'
				element={<LastProductsReviewController />}
			/>

			<Route path='/categories' element={<ListCategoriesController />} />
			<Route path='/categories/create' element={<CreateCategoryController />} />
			<Route path='/' element={<Dashboard />} />
		</Routes>
	)
}

export default Routers
