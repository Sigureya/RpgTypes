import type { PickByTypeKeys } from "@RpgTypes/libs/templates/pick/pickByType";
import type { FormatArrayIndexCompiled } from "./array";
import type {
  FormatArrayInput,
  FormatPlaceholder,
  FormatProperties,
  FormatPropertiesCompiled,
} from "./direct";
import type { SourceIdentifier } from "./sourceIdentifier";

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
): FormatArrayIndexCompiled<T, Source> => {
  return {
    dataKey: input.dataIdKey,
    placeHolder: `{${input.dataIdKey}}`,
    sourceId: input.sourceId,
  };
};

export const compileArrayPlaceholderEX = <T>(
  input: FormatArrayInput<T, SourceIdentifier>
): FormatArrayIndexCompiled<T, SourceIdentifier> => {
  return {
    dataKey: input.dataIdKey,
    placeHolder: `{${input.dataIdKey}}`,
    sourceId: {
      author: input.sourceId.author,
      kind: input.sourceId.kind,
      module: input.sourceId.module,
    },
  };
};
