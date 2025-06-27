import type { Token } from "./types/token";

export type MappingTable<T> = {
  [K in Extract<keyof T, string>]: (value: string) => T[K];
};

type TableConcept = {
  [key: string]: (tokens: string) => unknown;
};

export const mapKeywords = <T extends TableConcept>(
  tokens: ReadonlyArray<Token>,
  fnTable: T
): {
  [K in keyof T]?: ReturnType<T[K]>;
} => {
  return tokens.reduce((acc, token) => {
    if (token.keyword in acc) {
      return acc;
    }
    const fn = fnTable[token.keyword as keyof T];
    if (typeof fn === "function") {
      return {
        [token.keyword]: fn(token.value),
        ...acc,
      };
    }
    return acc;
  }, {});
};
