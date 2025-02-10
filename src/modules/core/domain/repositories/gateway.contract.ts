export interface IGatewayContract {
	get<R>(url: string): Promise<R>
	post<T, R>(url: string, data: T): Promise<R>
	put<T, R>(url: string, data: T): Promise<R>
	delete<R>(url: string): Promise<R>
	patch<T, R>(url: string, data: T): Promise<R>
}
