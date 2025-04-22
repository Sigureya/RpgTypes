export interface DomainLabel<T> {
    domainName: string;
    options: T;
}
export type DefineLable<T> = {
    [K in keyof T]: string;
};
