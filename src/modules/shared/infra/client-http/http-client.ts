import ky from "ky"
import "reflect-metadata"
import type { IGatewayContract } from "@modules/core/domain/repositories"
import { injectable } from "inversify"

export const api = ky.create({
	prefixUrl: "http://localhost:4001/",
	credentials: "include"
})

@injectable()
export class KyGateway implements IGatewayContract {
	async get<R>(url: string): Promise<R> {
		return api.get(url).json()
	}

	async post<T, R>(url: string, data: T): Promise<R> {
		return api.post(url, { json: data }).json()
	}

	async put<T, R>(url: string, data: T): Promise<R> {
		return api.put(url, { json: data }).json()
	}

	async delete<R>(url: string): Promise<R> {
		return api.delete(url).json()
	}

	async patch<T, R>(url: string, data: T): Promise<R> {
		return api.patch(url, { json: data }).json()
	}
}
