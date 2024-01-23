export interface IRepository<Entity, EntityId> {
    getAll(): Promise<Entity[] | null>;
    getOne(id: EntityId): Promise<Entity | null>;
    save(data: Entity): Promise<void>;
    delete(id: EntityId): Promise<void>;
}

export abstract class Repository<Entity, EntityId> implements IRepository<Entity, EntityId>{
    abstract getAll(): Promise<Entity[] | null>;
    abstract getOne(id: EntityId): Promise<Entity | null>;
    abstract save(data: Entity): Promise<void>;
    abstract delete(id: EntityId): Promise<void>;
}