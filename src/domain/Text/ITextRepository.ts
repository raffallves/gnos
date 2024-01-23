import Text from "@src/domain/Text/Text";
import TextId from "@src/domain/Text/TextId";
import { IRepository } from "@src/domain/CommonAbstractions/Repository";

export default interface ITextRepository extends IRepository<Text, TextId> {}