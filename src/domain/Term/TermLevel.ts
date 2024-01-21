import ValueObject from "@src/domain/CommonAbstractions/ValueObject";

const MAXIMUM_LEVEL = 4;
const MINIMUM_LEVEL = 0;

export default class TermLevel extends ValueObject<number> {
    private constructor(level: number) {
        super(level);
    }

    public create(level: number): TermLevel {
        if (level > MAXIMUM_LEVEL || level < MINIMUM_LEVEL) {
            throw new Error('Level must be between 0 and 4');
        }
        return new TermLevel(level);
    }
}