import UUID from "@src/domain/CommonAbstractions/UUID";

export default class TextId extends UUID {
    private constructor(uuid: string) {
        super(uuid);
    }

    public static create(): TextId {
        const newId = super.create().getValue();
        return new TextId(newId);
    }
}