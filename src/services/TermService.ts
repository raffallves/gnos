import ITermRepository from "@src/domain/Term/ITermRepository";
import Term from "@src/domain/Term/Term";
import LanguageId from "@src/domain/Language/LanguageId";
import TagId from "@src/domain/Term/TagId";
import TermId from "@src/domain/Term/TermId";

export default class TermService {
    private readonly _repository: ITermRepository;

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
        await this._repository.save(newTerm);
    }

    public async getTermById(id: TermId): Promise<Term | null> {
        return await this._repository.getOne(id);
    }

    public async getAllTerms(): Promise<Term[] | null> {
        return await this._repository.getAll();
    }

    public async getAllTermsByLanguageId(id: LanguageId): Promise<Term[] | null> {
        return await this._repository.getAllByLanguageId(id);
    }

    public async changeTermLevel(id: TermId, level: number): Promise<void> {
        const term = await this.getTermById(id);

        if (!term) {
            throw new Error('Term not found.');
        }

        term.setLevel(level);
        await this._repository.save(term);
    }

    // s

    public async deleteTerm(id: TermId): Promise<void> {
        await this._repository.delete(id);
    }
}