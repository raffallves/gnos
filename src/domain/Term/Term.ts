import Entity from "@src/domain/CommonAbstractions/Entity";
import TermId from '@src/domain/Term/TermId';
import LanguageId from "@src/domain/Language/LanguageId";
import TagId from "@src/domain/Term/TagId";
import Tag from "@src/domain/Term/Tag";
import TermLevel from "@src/domain/Term/TermLevel";

export default class Term extends Entity {
    private term: string;
    private definition: string;
    private languageId: LanguageId;
    private contextPhrase: string;
    private level: TermLevel;
    private termTags: TagId[];


    public constructor(
        id: TermId, 
        term: string, 
        languageId: LanguageId,
        definition: string,
        contextPhrase: string,
        termTags: TagId[],
        level: TermLevel
    ) {
        super(id);
        this.term = term;
        this.definition = definition;
        this.languageId = languageId;
        this.contextPhrase = contextPhrase;
        this.termTags = termTags;
        this.level = level;
    }

    public getTermId(): TermId {
        return super.getId() as TermId;
    }

    public getTerm(): string {
        return this.term;
    }

    public getDefinition(): string {
        return this.definition;
    }

    public getContextPhrase(): string {
        return this.contextPhrase;
    }

    public getTags(): TagId[] {
        return this.termTags;
    }

    public getLevel(): TermLevel {
        return this.level;
    }

    public static create(
        term: string, 
        languageId: LanguageId,
        definition: string = '',
        contextPhrase: string = '',
        termTags: TagId[] = [],
        level: number = 0
    ): Term {
        const uuid = TermId.create();
        term = term.toLocaleLowerCase();
        const termLevel = TermLevel.create(level);
        
        return new Term(uuid, term, languageId, definition, contextPhrase, termTags, termLevel);
    }

    public addTag(tag: Tag): void {
        this.termTags.push(tag.getTagId());
    }

    public setLevel(newLevel: number) {
        const termLevel = TermLevel.create(newLevel);
        this.level = termLevel;
    }
}