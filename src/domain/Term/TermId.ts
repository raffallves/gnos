import UUID from "@src/domain/CommonAbstractions/UUID";

export default class TermId extends UUID {
    private constructor(uuid: string) {
        super(uuid);
    }

    public static create(): TermId {
        const newId = super.create().getValue();
        return new TermId(newId);
    }
}