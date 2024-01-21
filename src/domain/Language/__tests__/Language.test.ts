import Language from "@src/domain/Language/Language";
import LanguageId from "@src/domain/Language/LanguageId";

describe("Language entity tests", () => {
    it('creates a language with name and id', () => {
        const language = Language.create("English");

        expect(language.getName()).toBe("english");
        expect(language.getLanguageId()).toBeInstanceOf(LanguageId);
    });
});