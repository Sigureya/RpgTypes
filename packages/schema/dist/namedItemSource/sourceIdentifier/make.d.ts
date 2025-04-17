import { SourceIdentifier } from './types';
export declare const sanitizeKey: (value: string) => string | undefined;
export declare const testUnknonwKey: (value: unknown) => value is string;
export declare const joinSourceKey: (key: SourceIdentifier) => string;
export declare const isValid: (source: Partial<SourceIdentifier>) => source is SourceIdentifier;
