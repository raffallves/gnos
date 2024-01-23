import ITermRepository from "@src/domain/Term/ITermRepository";
import Term from "@src/domain/Term/Term";
import LanguageId from "@src/domain/Language/LanguageId";
import TagId from "@src/domain/Term/TagId";

export default class TermService {
    private readonly _repository;

    private constructor(repository: ITermRepository) {
        this._repository = repository;
    }

    public static create(repository: ITermRepository) {
        return new TermService(repository);
    }

    public async createTerm(
        term: string,
        languageId: LanguageId,
        definition: string,
        contextPhrase: string,
        termTags: TagId[],
        level: number
    ): Promise<void> {
        const newTerm = Term.create(term, languageId, definition, contextPhrase, termTags, level);
        this._repository.save(newTerm);
    }
}