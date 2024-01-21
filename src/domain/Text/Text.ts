import Entity from "@src/domain/CommonAbstractions/Entity";
import TextId from "@src/domain/Text/TextId";
import TermId from "@src/domain/Term/TermId";
import LanguageId from "@src/domain/Language/LanguageId";

export default class Text extends Entity {
    private languageId: LanguageId;
    private title: TermId[] = [];
    private content: TermId[][] = [[]];

    private constructor(id: TextId, languageId: LanguageId) {
        super(id);
        this.languageId = languageId;
    }

    public static create(languageId: LanguageId): Text {
        const uuid = TextId.create();
        return new Text(uuid, languageId);
    }

    public setContent(contentData: TermId[][]): void {
        this.content = contentData;
    }

    public setTitle(titleData: TermId[]): void {
        this.title = titleData;
    }

    public getTitle(): TermId[] {
        return this.title;
    }

    public getContent(): TermId[][] {
        return this.content;
    }

    public separateSentences(rawText: string, splitter: string): string[] {
        const punctuationRegex = new RegExp(`[^${splitter}]+[${splitter}]*`, 'g');
        return rawText.match(punctuationRegex) || [];
    }

    public separateWords(sentence: string): string[] {
        return sentence.split(/\s+/).filter(Boolean);
    }
}