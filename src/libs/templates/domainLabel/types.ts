export interface DomainName {
  title: string;
}

export interface DomainLabel<T> extends DomainName {
  title: string;
  options: T;
}

export type DefineLable<T> = {
  [K in keyof T]: string;
};
