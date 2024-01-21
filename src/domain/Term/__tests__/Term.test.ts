import Term from "@src/domain/Term/Term";
import TermId from "@src/domain/Term/TermId";
import Language from "@src/domain/Language/Language";

describe("Term entity tests", () => {
    it('creates a term from the english language', () => {
        const language = Language.create('English');
        const term = Term.create('Book', language.getLanguageId());

        expect(term.getTerm()).toBe('book');
        expect(term.getTermId()).toBeInstanceOf(TermId);
        expect(term.getDefinition()).toBe('');
        expect(term.getContextPhrase()).toBe('');
        expect(term.getTags()).toStrictEqual([]);
    });
});