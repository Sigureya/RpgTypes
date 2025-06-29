import type * as C from "./constants";

type KeywordEnum = (typeof C)[keyof typeof C];

type TableConcept = {
  [key: string]: (tokens: string) => unknown;
};

export const xxx = <T extends TableConcept>(
  tokens: Record<string, string>,
  fnTable: T
): {
  [K in keyof T]?: ReturnType<T[K]>;
} => {
  return Object.entries(fnTable).reduce((acc, [key, fn]) => {
    if (key in tokens) {
      const value = tokens[key as KeywordEnum];
      if (typeof value === "string") {
        return {
          ...acc,
          [key]: fn(value),
        };
      }
      return acc;
    }
    return acc;
  }, {});
};

export const fnEx = <Kind extends string, T>(
  kind: Kind,
  defaultValue: T,
  tokens: Record<string, string>,
  fnTable: TableConcept
) => {
  return {
    default: defaultValue,
    ...xxx(tokens, fnTable),
    kind,
  };
};
export const mappingV2Array = <
  T extends TableConcept & { default: (s: string) => unknown[] },
  Kind extends string
>(
  kind: Kind,
  tokens: Record<KeywordEnum, string>,
  fnTable: T
): {
  kind: Kind;
  default: ReturnType<T["default"]>;
} & {
  [K in keyof T]?: ReturnType<T[K]>;
} => {
  return {
    default: [],
    ...xxx(tokens, fnTable),
    kind,
  };
};
