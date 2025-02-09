export class BaseResponse<T> {
	createdAt: Date
	hasError: boolean
	totalItems: number
	data: T[]
}
