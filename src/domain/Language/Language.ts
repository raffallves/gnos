import Entity from "@src/domain/CommonAbstractions/Entity";
import LanguageId from "@src/domain/Language/LanguageId";

interface LanguageSettings {
    languageCode: string,
    sentenceEndings: string,
    sentenceEndingExcpetions: string,
    characterSubstitutions: string,
    wordEndings: string,
    readingDirection: string,
    dictionaries: string[]
}

export default class Language extends Entity {
    private languageName: string;
    private settings: LanguageSettings;

    protected constructor(id: LanguageId, name: string, settings: LanguageSettings) {
        super(id);
        this.languageName = name;
        this.settings = settings;
    }

    public static create(name: string, settings: LanguageSettings, id?: string) {
        const uuid = LanguageId.create(id);
        return new Language(uuid, name.toLocaleLowerCase(), settings);
    }

    public getName(): string {
        return this.languageName;
    }

    public getLanguageId(): LanguageId {
        return super.getId() as LanguageId;
    }

    public getSettings(): LanguageSettings {
        return this.settings;
    }

    public changeSettings(newSettings: LanguageSettings): void {
        // implement
    }
}