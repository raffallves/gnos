import UUID from "@src/domain/CommonAbstractions/UUID";

export default class LanguageId extends UUID {
    private constructor(uuid: string) {
        super(uuid);
    }

    public static create(): LanguageId {
        const newId = super.create().getValue();
        return new LanguageId(newId);
    }
}