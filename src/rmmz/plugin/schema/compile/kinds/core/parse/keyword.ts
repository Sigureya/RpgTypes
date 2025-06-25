import type { Token } from "./types/token";

export type MappingTable<T> = {
  [K in Extract<keyof T, string>]: (value: string) => T[K];
};
export const mapKeywords = <T>(
  tokens: ReadonlyArray<Token>,
  fnTable: MappingTable<T>
): Partial<T> => {
  return tokens.reduce((acc, token) => {
    if (token.keyword in acc) {
      // 追加済みなら無視
      return acc;
    }
    const fn = fnTable[token.keyword as keyof MappingTable<T>];
    if (typeof fn === "function") {
      return {
        [token.keyword]: fn(token.value),
        ...acc,
      };
    }
    return acc;
  }, {});
};
