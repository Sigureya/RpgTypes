import type { MappingTable } from "./mapping/mapping";
import { compileParam, compileArrayParam } from "./mapping/mapping";
import { KEYWORD_KIND } from "./parse/types/keyword/constants";
import type { OptionItem } from "./parse/types/selectOption";
import type { PluginParamTokens } from "./parse/types/types";
import type {
  BooleanParam,
  NumberParam,
  PrimitiveParam,
  FileParam,
  GenericIdParam,
  NumberArrayParam,
  StringArrayParam,
  FileArrayParam,
  StringParam,
  ComboParam,
  SelectParam,
} from "./primitiveParams";
import { parseDeepJSON } from "./rmmzJSON";
import type {
  DataKind_RpgUnion,
  DataKind_SystemUnion,
} from "./rpgData/rpgDataTypesNames";

type MappingTableEx<T> = MappingTable<Omit<T, "kind">>;

export type ParamSoruceRecord<T> = Partial<Record<keyof T, string>>;

export const compileAttributes = (
  tokens: PluginParamTokens
): PrimitiveParam => {
  if (KEYWORD_KIND in tokens.attr) {
    const func = TABLE2[tokens.attr.kind as keyof typeof TABLE2];
    if (func) {
      return func(tokens);
    }
  }
  return compileParam("any", "", tokens.attr, STRING);
};

const attrString = (value: string): string => value;
const numberArray = (value: string): number[] => {
  const numbers = value
    .replace("[", "")
    .replace("]", "")
    .split(",")
    .map((v) => parseFloat(v.replaceAll(`"`, "").trim()));
  return numbers.filter((n) => !isNaN(n));
};

const STRING = {
  default: attrString,
  text: attrString,
  desc: attrString,
  parent: attrString,
} as const satisfies MappingTableEx<StringParam>;

const compileComboParam = (tokens: PluginParamTokens): ComboParam => {
  const option: string[] = tokens.options?.map((o) => o.option) ?? [];

  return {
    ...compileParam("combo", "", tokens.attr, STRING),
    options: option,
  };
};
const compileSelectParam = (tokens: PluginParamTokens): SelectParam => {
  const options: OptionItem[] =
    tokens.options?.map((o) => ({
      option: o.option,
      value: o.value,
    })) ?? [];

  return {
    ...compileParam("select", "", tokens.attr, STRING),
    options,
  };
};

const compileBooleanParam = (tokens: PluginParamTokens): BooleanParam => {
  const BOOLEAN = {
    default: (value: string) => value === "true",
    text: attrString,
    desc: attrString,
    on: attrString,
    off: attrString,
    parent: attrString,
  } as const satisfies MappingTableEx<BooleanParam>;
  return compileParam("boolean", true, tokens.attr, BOOLEAN);
};

const compileNumberParam = (tokens: PluginParamTokens): NumberParam => {
  const NUMBER = {
    default: (value: string) => parseFloat(value),
    text: attrString,
    desc: attrString,
    decimals: (value: string) => parseInt(value, 10),
    min: (value: string) => parseFloat(value),
    max: (value: string) => parseFloat(value),
    parent: attrString,
  } as const satisfies MappingTableEx<NumberParam>;
  return compileParam("number", 0, tokens.attr, NUMBER);
};

const compileNumberArrayParam = (
  tokens: PluginParamTokens
): NumberArrayParam => {
  const NUMBER_ARRAY = {
    default: numberArray,
    text: attrString,
    desc: attrString,
    decimals: (value: string) => parseInt(value, 10),
    min: (value: string) => parseFloat(value),
    max: (value: string) => parseFloat(value),
    parent: attrString,
  } as const satisfies MappingTableEx<NumberArrayParam>;
  return compileArrayParam("number[]", tokens.attr, NUMBER_ARRAY);
};

const compileStringParam = (tokens: PluginParamTokens) => {
  return compileParam("string", "", tokens.attr, STRING);
};

const compileStringArrayParam = (
  tokens: PluginParamTokens
): StringArrayParam => {
  const STRING_ARRAY = {
    default: (value: string): string[] => parseDeepJSON(value) as string[],
    text: attrString,
    desc: attrString,
    parent: attrString,
  } as const satisfies MappingTableEx<StringArrayParam>;
  return compileArrayParam("string[]", tokens.attr, STRING_ARRAY);
};

const compileFileParam = (tokens: PluginParamTokens): FileParam => {
  const FILE = {
    default: attrString,
    text: attrString,
    desc: attrString,
    parent: attrString,
    dir: attrString,
  } as const satisfies MappingTableEx<FileParam>;
  return {
    dir: "",
    ...compileParam("file", "", tokens.attr, FILE),
  };
};

const compileFileArrayParam = (tokens: PluginParamTokens): FileArrayParam => {
  const FILE_ARRAY = {
    default: (value: string): string[] => parseDeepJSON(value) as string[],
    text: attrString,
    desc: attrString,
    parent: attrString,
    dir: attrString,
  } as const satisfies MappingTableEx<FileArrayParam>;
  return {
    dir: "",
    ...compileArrayParam("file[]", tokens.attr, FILE_ARRAY),
  };
};

const compileDataIdArray = <
  Kind extends DataKind_RpgUnion | DataKind_SystemUnion
>(
  tokens: PluginParamTokens,
  kind: `${Kind}[]`
) => {
  const DATA_ID_ARRAY = {
    default: numberArray,
    text: attrString,
    desc: attrString,
    parent: attrString,
  } as const;
  return compileArrayParam(kind, tokens.attr, DATA_ID_ARRAY);
};

const compileDataId = <Kind extends DataKind_RpgUnion | DataKind_SystemUnion>(
  tokens: PluginParamTokens,
  kind: Kind
) => {
  const DATA_ID = {
    default: (value: string) => parseInt(value, 10),
    text: attrString,
    desc: attrString,
    parent: attrString,
  } as const satisfies MappingTableEx<GenericIdParam>;
  return compileParam(kind, 0, tokens.attr, DATA_ID);
};

const TABLE2 = {
  number: (tokens) => compileNumberParam(tokens),
  "number[]": compileNumberArrayParam,
  string: compileStringParam,
  "string[]": compileStringArrayParam,
  multiline_string: compileStringParam,
  "multiline_string[]": compileStringArrayParam,
  combo: compileComboParam,
  select: compileSelectParam,
  actor: (tokens) => compileDataId(tokens, "actor"),
  "actor[]": (tokens) => compileDataIdArray(tokens, "actor[]"),
  class: (tokens) => compileDataId(tokens, "class"),
  "class[]": (tokens) => compileDataIdArray(tokens, "class[]"),
  skill: (tokens) => compileDataId(tokens, "skill"),
  "skill[]": (tokens) => compileDataIdArray(tokens, "skill[]"),
  item: (tokens) => compileDataId(tokens, "item"),
  "item[]": (tokens) => compileDataIdArray(tokens, "item[]"),
  weapon: (tokens) => compileDataId(tokens, "weapon"),
  "weapon[]": (tokens) => compileDataIdArray(tokens, "weapon[]"),
  armor: (tokens) => compileDataId(tokens, "armor"),
  "armor[]": (tokens) => compileDataIdArray(tokens, "armor[]"),
  state: (tokens) => compileDataId(tokens, "state"),
  "state[]": (tokens) => compileDataIdArray(tokens, "state[]"),
  enemy: (tokens) => compileDataId(tokens, "enemy"),
  "enemy[]": (tokens) => compileDataIdArray(tokens, "enemy[]"),
  common_event: (tokens) => compileDataId(tokens, "common_event"),
  "common_event[]": (tokens) => compileDataIdArray(tokens, "common_event[]"),
  switch: (tokens) => compileDataId(tokens, "switch"),
  "switch[]": (tokens) => compileDataIdArray(tokens, "switch[]"),
  variable: (tokens) => compileDataId(tokens, "variable"),
  "variable[]": (tokens) => compileDataIdArray(tokens, "variable[]"),
  troop: (tokens) => compileDataId(tokens, "troop"),
  "troop[]": (tokens) => compileDataIdArray(tokens, "troop[]"),
  boolean: compileBooleanParam,
  file: compileFileParam,
  "file[]": compileFileArrayParam,
} as const satisfies Partial<{
  [K in PrimitiveParam["kind"]]: (tokens: PluginParamTokens) => PrimitiveParam;
}>;
