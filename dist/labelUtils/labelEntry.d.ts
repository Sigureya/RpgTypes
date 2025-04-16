export type LabelEntry = {
    domainName: string;
} & Record<string, string>;
export type LabelDomains = Record<string, LabelEntry>;
export interface DomainLabel<T extends Record<string, string>> {
    domainName: string;
    options: T;
}
