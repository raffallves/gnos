import Entity from "@src/domain/CommonAbstractions/Entity";
import LanguageId from "@src/domain/Language/LanguageId";
import LanguageSettings, { ILanguageSettings } from "@src/domain/Language/LanguageSettings";
import ISO6391 from 'iso-639-1';

export default class Language extends Entity {
    private languageName: string;
    private settings: LanguageSettings;

    protected constructor(id: LanguageId, name: string, settings: LanguageSettings) {
        super(id);
        this.languageName = name;
        this.settings = settings;
    }

    public static create(
        name: string, 
        dictionaries: string[],
        languageCharacters: string,
        splitEachChar?: boolean,
        sentenceEndings?: string,
        sentenceEndingExceptions?: string,
        characterSubstitutions?: string,
        readingDirection?: string,
        id?: string
        ): Language {
        const uuid = LanguageId.create(id);
        const languageCode = ISO6391.getCode(name);
        const languageSettings = LanguageSettings.create({
            languageCode,
            languageCharacters,
            splitEachChar,
            sentenceEndings,
            sentenceEndingExceptions,
            characterSubstitutions,
            readingDirection,
            dictionaries
        });
        return new Language(uuid, name.toLocaleLowerCase(), languageSettings);
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

    public changeSettings(inputSettings: any): void {
        if (!inputSettings || typeof inputSettings !== 'object') {
            throw new Error('Invalid input format.');
        }

        const updatedSettings: any = {...this.getSettings().getValue()};

        for (const key in updatedSettings) {
            if (
                inputSettings.hasOwnProperty(key) && 
                LanguageSettings.isKey(updatedSettings, key) &&
                typeof updatedSettings[key] === typeof inputSettings[key]
            ) {
                updatedSettings[key] = inputSettings[key];
            }
        }

        this.settings = LanguageSettings.create(updatedSettings);
    }
}