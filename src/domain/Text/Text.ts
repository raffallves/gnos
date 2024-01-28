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

    public static create(languageId: LanguageId, id?: string): Text {
        const uuid = TextId.create(id);
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

    private separateSentences(rawText: string, splitter: string, exceptionSplitter: string): string[] {
        rawText.replace(new RegExp(`(${exceptionSplitter})\\s`, 'gu'), '$1‧');
        rawText.replace(new RegExp(`([${splitter}¶])\\s`, 'gu'), '$1\n');
        rawText.replace(" ¶\n", "\n¶\n");
        rawText.replace('‧', ' ');
        return rawText.split('\n');
    }

    private separateWords(sentence: string, characters: string): string[] {
        return sentence.trim().split(new RegExp(`([^${characters}]{1,})`, 'u'));
    }

    public processTextContent(
        text: string, 
        languageCharacters: string,
        splitter: string, 
        exceptionSplitter: string, 
        wordSplitter: string
    ): string[][] {
        const sentences = this.separateSentences(text, splitter, exceptionSplitter);
        const content: string[][] = [];
        sentences.forEach(sentence => {
            const words = this.separateWords(sentence, languageCharacters);
            content.push(words);
        });

        return content;
    }
}