import LanguageId from "@src/domain/Language/LanguageId";
import ITextRepository from "@src/domain/Text/ITextRepository";
import Text from "@src/domain/Text/Text";
import TermService from "./TermService";
import LanguageService from "./LanguageService";

export default class TextService {
    private readonly _repository: ITextRepository;
    private readonly _termService: TermService;
    private readonly _languageService: LanguageService

    private constructor(
        repository: ITextRepository, 
        termService: TermService,
        languageService: LanguageService
    ) {
        this._repository = repository;
        this._termService = termService;
        this._languageService = languageService;
    }

    public static create(
        repository: ITextRepository, 
        termService: TermService,
        languageService: LanguageService
    ): TextService {
        return new TextService(repository, termService, languageService);
    }

    public async createText(
        languageId: LanguageId, 
        title: string, 
        content: string
    ): Promise<void> {
        const text = Text.create(languageId);
        const language = await this._languageService.getLanguageById(languageId);

        if (!language) {
            throw new Error('Language not found.');

        }

        const languageSettings = language.getSettings().getValue();
        const titleWords = text.separateWords(title);
        const contentWords = text.processTextContent(
            content, 
            languageSettings.sentenceEndings, 
            languageSettings.sentenceEndingExceptions,
            languageSettings.wordEndings
        );
    }
}