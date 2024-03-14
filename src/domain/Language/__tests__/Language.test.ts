import Language from "@src/domain/Language/Language";
import LanguageId from "@src/domain/Language/LanguageId";

describe("Language entity tests", () => {
    describe('When working with languages', () => {
        // it('creates a language with name and id', () => {
        //     const language = Language.create("English");

        //     expect(language.getName()).toBe("english");
        //     expect(language.getLanguageId()).toBeInstanceOf(LanguageId);
        // });

        it('should remap the reading direction type', () => {
            const language = Language.create(
                'português', 
                ['https://www.google.com'], 
                '[A-Za-z]', 
                undefined, undefined, undefined, undefined, 
                'left-to-right'
            );
            const settings = language.getSettings();
            
            expect(settings.getValue().readingDirection).toBe('left-to-right');
        });

        it('should correctly change the language settings', () => {
            const language = Language.create('português', ['https://www.google.com'], '[A-Za-z]');
            const newSettings1 = {
                readingDirection: 'left-to-right'
            }
            language.changeSettings(newSettings1);
            expect(language.getSettings().getValue().readingDirection).toBe('left-to-right');
        });

        it('should correctly change the char split language settings', () => {
            const language = Language.create('português', ['https://www.google.com'], '[A-Za-z]');
            const newSettings1 = {
                splitEachChar: true
            }
            language.changeSettings(newSettings1);
            expect(language.getSettings().getValue().splitEachChar).toBeTruthy();
        });

        it('should refuse to create an unsupported language', () => {
            expect(() => {
                Language.create('mauvaisiano', ['https://www.google.com'], '[A-Za-z]');
            }).toThrow();
        }); 


    });
});