import type { PickByTypeKeys } from "@RpgTypes/templates";
import type {
  FormatArrayInput,
  FormatPlaceholder,
  FormatProperties,
  FormatPropertiesCompiled,
} from "./direct";
import type { FormatArrayIndex } from "./array";

export const compileFormatPropeties = <T>(
  props: FormatProperties<T>
): FormatPropertiesCompiled<T> => ({
  numbers: props.numbers ? compilePlaceholders(props.numbers) : [],
  strings: props.strings ? compilePlaceholders(props.strings) : [],
});

const compilePlaceholders = <T, V extends number | string>(
  keys: ReadonlyArray<PickByTypeKeys<T, V>>
): FormatPlaceholder<T, V>[] => {
  return keys.map((key) => ({
    dataKey: key,
    placeHolder: `{${key}}`,
  }));
};

export const compileArrayPlaceholder = <T, Source extends string | number>(
  input: FormatArrayInput<T, Source>
): FormatArrayIndex<T, Source> => {
  return {
    dataKey: input.dataIdKey,
    placeHolder: `{${input.dataIdKey}}`,
    sourceId: input.sourceId,
  };
};

export const compileArrayPlaceholderEX = <
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
