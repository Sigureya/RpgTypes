import type { FormatPlaceholder, PrimitivePropertyKeys } from "./types";

export const buildNumberPlaceholders = <T>(
  keys: ReadonlyArray<string & PrimitivePropertyKeys<T, number>>
): FormatPlaceholder<T, number>[] => {
  return keys.map((key) => ({
    dataKey: key,
    placeHolder: `{${key}}`,
  }));
};

export const buildStringPlaceholders = <T>(
  keys: ReadonlyArray<string & PrimitivePropertyKeys<T, string>>
): FormatPlaceholder<T, string>[] => {
  return keys.map((key) => ({
    dataKey: key,
    placeHolder: `{${key}}`,
  }));
};
