import { DomainLabel } from '../../schema';
export type PrimitiveRecord<T> = {
    [K in keyof T]: string;
};
export declare const mergeWithDefaults: <T>(defaultLabels: PrimitiveRecord<T>, labels: Partial<T>) => { [K in keyof T]: string; };
export declare const mergeDomainLabel: <T>(base: DomainLabel<PrimitiveRecord<T>>, override: Partial<DomainLabel<Partial<T>>>) => DomainLabel<{ [K in keyof T]: string; }>;
export declare const mergeNestedPrimitiveRecords: <T>(base: T, override: Partial<{ [K in keyof T]: Partial<PrimitiveRecord<T[K]>>; }>) => T;
