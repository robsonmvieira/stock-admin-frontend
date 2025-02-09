export abstract class Entity {
	id?: string
	createdAt?: Date
	updatedAt?: Date | null
	deletedAt?: Date | null
	protected constructor(
		id?: string,
		createdAt?: Date,
		updatedAt?: Date,
		deletedAt?: Date
	) {
		this.id = id ?? ""
		this.createdAt = createdAt ?? new Date()
		this.updatedAt = updatedAt ?? null
		this.deletedAt = deletedAt ?? null
	}
}
