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
        languageCharacters: string,
        sentenceEndings: string,
        sentenceEndingExcpetions: string,
        characterSubstitutions: string,
        splitEachChar: boolean,
        readingDirection: string,
        dictionaries: string[]
    ): Promise<void> {
        const newLanguage = Language.create(
            name, 
            dictionaries,
            languageCharacters,
            splitEachChar,
            sentenceEndings,
            sentenceEndingExcpetions,
            characterSubstitutions,
            readingDirection
        );
        await this._repository.save(newLanguage);
    }

    public async getLanguageById(id: LanguageId): Promise<Language | null> {
        return await this._repository.getOne(id);
    }

    public async getAllLanguages(): Promise<Language[] | null> {
        return await this._repository.getAll();
    }

    public async updateLanguageSettings(id: LanguageId, settings: any): Promise<void> {
        const language = await this.getLanguageById(id);

        if (!language) {
            throw new Error('Language not found');
        }

        language.changeSettings(settings);
        this._repository.save(language);
    }

    public async deleteLanguage(id: LanguageId): Promise<void> {
        await this._repository.delete(id);
    }
}