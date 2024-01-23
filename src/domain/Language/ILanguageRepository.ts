import Language from "@src/domain/Language/Language";
import LanguageId from "@src/domain/Language/LanguageId";
import { IRepository } from "@src/domain/CommonAbstractions/Repository";

export default interface ILanguageRepository extends IRepository<Language, LanguageId> {}