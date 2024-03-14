import ValueObject from "@src/domain/CommonAbstractions/ValueObject";
import ISO6391 from 'iso-639-1';

export type ReadingDirection = 'left-to-right' | 'right-to-left';

export interface ILanguageSettings {
    languageCode: string,
    languageCharacters: string,
    splitEachChar: boolean,
    sentenceEndings: string,
    sentenceEndingExceptions: string,
    characterSubstitutions: string,
    readingDirection: ReadingDirection,
    dictionaries: string[]
}

export default class LanguageSettings extends ValueObject<ILanguageSettings> {
    private constructor(settings: ILanguageSettings) {
        super(settings);
    }

    private static validateDictionaries(dictionaries: string[]): boolean {
        const regex = /^(https?|http):\/\/[^\s/$.?#].[^\s]*$/;
        return dictionaries.every(link => regex.test(link));
    }

    private static validateReadingDirection(direction: string): boolean {
        if (direction !== 'left-to-right' && direction !== 'right-to-left') {
            return false;
        }
        return true;
    }
    
    public static create({
        languageCode,
        languageCharacters,
        splitEachChar = false,
        sentenceEndings = '.!?:;',
        sentenceEndingExceptions = '[A-Z.]|Dr.',
        characterSubstitutions = '',
        readingDirection = 'left-to-right',
        dictionaries
    }: any): LanguageSettings {

        if (!LanguageSettings.validateDictionaries(dictionaries)) {
            throw new Error('Invalid dictionary format.');
        }

        if(!LanguageSettings.validateReadingDirection(readingDirection)) {
            throw new Error('Invalid reading direction.');
        }

        if(!ISO6391.validate(languageCode)) {
            throw new Error('Invalid language code. Unsupported language.');
        }

        const settings = {
            languageCode,
            languageCharacters,
            splitEachChar,
            sentenceEndings,
            sentenceEndingExceptions,
            characterSubstitutions,
            readingDirection,
            dictionaries
        };

        return new LanguageSettings(settings);
    }

    public static isKey<T extends ILanguageSettings>(x: T, key: PropertyKey): key is keyof T {
        return key in x;
    }

    public equals(object?: LanguageSettings): boolean {
        if (object == null || !(object instanceof LanguageSettings)) {
            return false;
        }

        const current = super.getValue();
        const other = object.getValue();

        return (
            current.languageCode === other.languageCode &&
            current.languageCharacters === other.languageCharacters &&
            current.sentenceEndings === other.sentenceEndings &&
            current.sentenceEndingExceptions === other.sentenceEndingExceptions &&
            current.characterSubstitutions === other.characterSubstitutions &&
            current.splitEachChar === other.splitEachChar &&
            current.readingDirection === other.readingDirection &&
            current.dictionaries.length === other.dictionaries.length &&
            current.dictionaries.every((dict, index) => dict === other.dictionaries[index])
        );
    }

}