type TableConcept = {
  [key: string]: (tokens: string) => unknown;
};

export const mapKeyword2 = <T extends TableConcept>(
  tokens: Record<string, string>,
  fnTable: T
): {
  [K in keyof T]?: ReturnType<T[K]>;
} => {
  return Object.entries(fnTable).reduce((acc, [key, fn]) => {
    if (key in tokens) {
      const value = tokens[key as string];
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

export const compileParam = <Kind extends string, T>(
  kind: Kind,
  defaultValue: T,
  tokens: Record<string, string>,
  fnTable: TableConcept
) => {
  return {
    default: defaultValue,
    ...mapKeyword2(tokens, fnTable),
    kind,
  };
};
export const compileArrayParam2 = <
  T extends TableConcept & { default: (s: string) => unknown[] },
  Kind extends string
>(
  kind: Kind,
  tokens: Record<string, string>,
  fnTable: T
): {
  kind: Kind;
  default: ReturnType<T["default"]>;
} & {
  [K in keyof T]?: ReturnType<T[K]>;
} => {
  return {
    default: [],
    ...mapKeyword2(tokens, fnTable),
    kind,
  };
};
