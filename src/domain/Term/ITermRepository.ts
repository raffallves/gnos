import Term from "@src/domain/Term/Term";
import TermId from "@src/domain/Term/TermId";
import { IRepository } from "@src/domain/CommonAbstractions/Repository";
import LanguageId from "@src/domain/Language/LanguageId";

export default interface ITermRepository extends IRepository<Term, TermId> {
    getAllByLanguageId(id: LanguageId): Promise<Term[] | null>
}