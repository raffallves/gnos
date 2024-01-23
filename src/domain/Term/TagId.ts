import UUID from "@src/domain/CommonAbstractions/UUID";

export default class TagId extends UUID {
    private constructor(uuid: string) {
        super(uuid);
    }

    public static create(id?: string): TagId {
        const newId = super.create(id).getValue();
        return new TagId(newId);
    }
}