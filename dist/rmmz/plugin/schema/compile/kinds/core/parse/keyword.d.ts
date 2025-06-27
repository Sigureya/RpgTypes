import { Token } from './types/token';
export type MappingTable<T> = {
    [K in Extract<keyof T, string>]: (value: string) => T[K];
};
type TableConcept = {
    [key: string]: (tokens: string) => unknown;
};
export declare const mapKeywords2: <T extends TableConcept & {
    default: (s: string) => unknown;
}>(tokens: ReadonlyArray<Token>, defaultValue: ReturnType<T["default"]>, fnTable: T) => {
    default: ReturnType<T["default"]>;
} & { [K in keyof T]?: ReturnType<T[K]> | undefined; };
export declare const mapKeywords: <T extends TableConcept>(tokens: ReadonlyArray<Token>, fnTable: T) => { [K in keyof T]?: ReturnType<T[K]>; };
export {};
