import UUID from "@src/domain/CommonAbstractions/UUID";

export default abstract class Entity {
    private readonly id: UUID;

    protected constructor(id: UUID) {
        this.id = id;
    }

    protected getId(): UUID {
        return this.id;
    }
}