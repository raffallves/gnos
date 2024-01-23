import ValueObject from "@src/domain/CommonAbstractions/ValueObject";

const MAXIMUM_LEVEL = 5;
const MINIMUM_LEVEL = 0;

export default class TermLevel extends ValueObject<number> {
    private constructor(level: number) {
        super(level);
    }

    public static create(level: number): TermLevel {
        if (level > MAXIMUM_LEVEL || level < MINIMUM_LEVEL) {
            throw new Error(`Level must be between ${MINIMUM_LEVEL} and ${MAXIMUM_LEVEL}`);
        }
        return new TermLevel(level);
    }

    public equals(object?: TermLevel): boolean {
        if (object == null || !(object instanceof TermLevel)) {
            return false;
        }

        return this.getValue() === object.getValue();
    }

    public getValue(): number {
        return super.getValue();
    }
}