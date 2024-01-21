import UUID from '@src/domain/CommonAbstractions/UUID';
import TermId from '@src/domain/Term/TermId';

describe('UUID creation tests', () => {
    it('should create a new UUID', () => {
        const uuid = UUID.create();
        expect(uuid).toBeInstanceOf(UUID);
    });

    it('should evaluate two different UUIDs as not being equal', () => {
        const uuid = UUID.create();
        const uuid2 = UUID.create();

        expect(uuid.equals(uuid2)).toBeFalsy();
    });

    it('should evaluate the same UUID as being equal to itself', () => {
        const uuid = UUID.create();

        expect(uuid.equals(uuid)).toBeTruthy();
    });

    it('should equal a TermId instance', () => {
        const uuid = TermId.create();

        expect(uuid).toBeInstanceOf(TermId);
    });

    it('should be equal to itself (TermId)', () => {
        const uuid = TermId.create();

        expect(uuid.equals(uuid)).toBeTruthy();
    });

    it('shouldn\'t be equal to another of its kind (TermId)', () => {
        const uuid = TermId.create();
        const uuid2 = TermId.create();

        expect(uuid.equals(uuid2)).toBeFalsy();
    });
});