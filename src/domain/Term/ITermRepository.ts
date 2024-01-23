import Term from "@src/domain/Term/Term";
import TermId from "@src/domain/Term/TermId";
import { IRepository } from "@src/domain/CommonAbstractions/Repository";

export default interface ITermRepository extends IRepository<Term, TermId> {}