import UUID from "@src/domain/CommonAbstractions/UUID";

export default class TermId extends UUID {
    private constructor(uuid: string) {
        super(uuid);
    }

    public static create(id?: string): TermId {
        const newId = super.create(id).getValue();
        return new TermId(newId);
    }
}