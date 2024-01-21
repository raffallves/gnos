import Entity from "@src/domain/CommonAbstractions/Entity";
import TagId from "@src/domain/Term/TagId";

export default class Tag extends Entity {
    private tagName: string;

    protected constructor(id: TagId, name: string) {
        super(id);
        this.tagName = name;
    }

    public static create(name: string) {
        const uuid = TagId.create();
        return new Tag(uuid, name);
    }

    public getName(): string {
        return this.tagName;
    }

    public getTagId(): TagId {
        return super.getId() as TagId;
    }
}