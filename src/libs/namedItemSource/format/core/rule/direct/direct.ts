import type { PickByTypeKeys } from "@RpgTypes/templates";
import type {
  FormatArrayIndex,
  FormatArrayInput,
  FormatPlaceholder,
} from "./types";

export const buildNumberPlaceholders = <T>(
  keys: ReadonlyArray<PickByTypeKeys<T, number>>
): FormatPlaceholder<T, number>[] => {
  return keys.map((key) => ({
    dataKey: key,
    placeHolder: `{${key}}`,
  }));
};

export const buildStringPlaceholders = <T>(
  keys: ReadonlyArray<PickByTypeKeys<T, string>>
): FormatPlaceholder<T, string>[] => {
  return keys.map((key) => ({
    dataKey: key,
    placeHolder: `{${key}}`,
  }));
};

export const buildArrayPlaceholder = <T, Source extends string | number>(
  input: FormatArrayInput<T, Source>
): FormatArrayIndex<T, Source> => {
  return {
    dataKey: input.dataIdKey,
    placeHolder: `{${input.dataIdKey}}`,
    sourceId: input.sourceId,
  };
};

export const buildArrayPlaceholderEX = <
  T,
  Source extends Record<string, string | number>
>(
  input: FormatArrayInput<T, Source>
): FormatArrayIndex<T, Source> => {
  return {
    dataKey: input.dataIdKey,
    placeHolder: `{${input.dataIdKey}}`,
    sourceId: { ...input.sourceId },
  };
};
