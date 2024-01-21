import UUID from "@src/domain/CommonAbstractions/UUID";

export default class TagId extends UUID {
    private constructor(uuid: string) {
        super(uuid);
    }

    public static create(): TagId {
        const newId = super.create().getValue();
        return new TagId(newId);
    }
}