import TermLevel from "@src/domain/Term/TermLevel";

describe('TermLevel tests', () => {
    describe('When creating a TermLevel', () => {
        it('should be created with an in-range parameter', () => {
            const level = TermLevel.create(4);
            expect(level).toBeInstanceOf(TermLevel);
        });

        it('should refuse to create with an out-of-range parameter', () => {
            const wrongLevel1 = -1;
            const wrongLevel2 = 7;

            expect(() => {
                TermLevel.create(wrongLevel1);
            }).toThrow();

            expect(() => {
                TermLevel.create(wrongLevel2);
            }).toThrow();
        });

        it('should equal a like value', () => {
            const level = TermLevel.create(3);
            const level2 = TermLevel.create(3);
            expect(level.equals(level2)).toBeTruthy();
        });

        it('shouldn\'t equal a different value', () => {
            const level = TermLevel.create(3);
            const level2 = TermLevel.create(1);
            expect(level.equals(level2)).toBeFalsy();
        });
    });
});