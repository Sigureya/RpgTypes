export interface DomainName {
    domainName: string;
}
export interface DomainLabel<T> extends DomainName {
    domainName: string;
    options: T;
}
export type DefineLable<T> = {
    [K in keyof T]: string;
};
