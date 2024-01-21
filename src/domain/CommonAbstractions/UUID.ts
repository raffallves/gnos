import { randomUUID } from 'crypto';
import ValueObject from '@src/domain/CommonAbstractions/ValueObject';

export default class UUID extends ValueObject<string> {
    protected constructor(uuid: string) {
        super(uuid);
    }

    public equals(uuid: UUID): boolean {
        if (uuid == null || !(uuid instanceof UUID)) {
            return false;
        }

        const normalizedThis = super.getValue().replace('/-/g', '');
        const normalizedOther = uuid.getValue().replace('/-/g', '');

        return normalizedThis === normalizedOther;
    }

    public static create(): UUID {
        const newId = randomUUID();
        return new UUID(newId);
    }

    public getValue(): string {
        return super.getValue();
    }
}