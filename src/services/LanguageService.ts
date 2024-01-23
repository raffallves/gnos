import ILanguageRepository from "@src/domain/Language/ILanguageRepository";
import Language from "@src/domain/Language/Language";
import LanguageId from "@src/domain/Language/LanguageId";

export default class LanguageService {
    private readonly _repository: ILanguageRepository;

    private constructor(repository: ILanguageRepository) {
        this._repository = repository;
    }

    public static create(repository: ILanguageRepository) {
        return new LanguageService(repository);
    }

    public async createLanguage(
        name: string, 
        languageCode: string,
        sentenceEndings: string,
        sentenceEndingExcpetions: string,
        characterSubstitutions: string,
        wordEndings: string,
        readingDirection: string,
        dictionaries: string[]
    ): Promise<void> {
        const settings = {
            languageCode: languageCode,
            sentenceEndings: sentenceEndings,
            sentenceEndingExcpetions: sentenceEndingExcpetions,
            characterSubstitutions: characterSubstitutions,
            wordEndings: wordEndings,
            readingDirection: readingDirection,
            dictionaries: dictionaries
        }
        const newLanguage = Language.create(name, settings);
        this._repository.save(newLanguage);
    }

    public async getLanguageById(id: LanguageId): Promise<Language | null> {
        const language = await this._repository.getOne(id);
        return language;
    }

    public async getAllLanguages(): Promise<Language[] | null> {
        const languages = await this._repository.getAll();
        return languages;
    }

    public async updateLanguageSettings(id: LanguageId, settings: object): Promise<void> {
        const language = await this.getLanguageById(id);

        if (!language) {
            throw new Error('Language not found');
        }

        language.changeSettings(settings);
        this._repository.save(id.getValue(), settings);
    }

    public async deleteLanguage(id: LanguageId): Promise<void> {
        this._repository.delete(id);
    }
}