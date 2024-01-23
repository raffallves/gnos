import UUID from "@src/domain/CommonAbstractions/UUID";

export default class TextId extends UUID {
    private constructor(uuid: string) {
        super(uuid);
    }

    public static create(id?: string): TextId {
        const newId = super.create(id).getValue();
        return new TextId(newId);
    }
}