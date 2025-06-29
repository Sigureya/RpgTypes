import { KEYWORD_OPTION } from "./parse/keyword2/constants";
import type { MappingTable } from "./parse/keyword2/mapping";
import {
  compileParam,
  compileArrayParam,
  mapKeyword,
} from "./parse/keyword2/mapping";
import type { OptionItem, Token } from "./parse/types/token";
import type {
  BooleanParam,
  NumberParam,
  StructParamPrimitive,
  ComboParam,
  FileParam,
  GenericIdParam,
  NumberArrayParam,
  SelectParam,
  StringArrayParam,
  FileArrayParam,
  StringParam,
} from "./primitiveParams";
import { parseDeepJSON } from "./rmmzJSON";
import type {
  DataKind_RpgUnion,
  DataKind_SystemUnion,
} from "./rpgData/rpgDataTypesNames";

type MappingTableEx<T> = MappingTable<Omit<T, "kind">>;

export type ParamSoruceRecord<T> = Partial<Record<keyof T, string>>;

export const compileAttributes = (
  tokens: Record<string, string>
): StructParamPrimitive => {
  if ("kind" in tokens) {
    const func = TABLE2[tokens.kind as keyof typeof TABLE2];
    if (func) {
      return func(tokens);
    }
  }
  return {
    kind: "string",
    default: "",
    text: "",
    desc: "",
    parent: "",
  };
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

// const compileComboParam = (tokens: ReadonlyArray<Token>): ComboParam => {
//   const options: string[] = tokens
//     .filter((t) => t.keyword === KEYWORD_OPTION)
//     .map((t) => t.value);

//   return {
//     default: options[0] ?? "",
//     ...mapKeyword(tokens, STRING),
//     kind: "combo",
//     options,
//   };
// };
// const compileSelectParam = (tokens: ReadonlyArray<Token>): SelectParam => {
//   const options: OptionItem[] = [];
//   return {
//     default: "",
//     ...mapKeywords(tokens, STRING),
//     kind: "select",
//     options,
//   };
// };

const compileBooleanParam = (tokens: Record<string, string>): BooleanParam => {
  const BOOLEAN = {
    default: (value: string) => value === "true",
    text: attrString,
    desc: attrString,
    on: attrString,
    off: attrString,
    parent: attrString,
  } as const satisfies MappingTableEx<BooleanParam>;
  return compileParam("boolean", true, tokens, BOOLEAN);
};

const compileNumberParam = (tokens: Record<string, string>): NumberParam => {
  const NUMBER = {
    default: (value: string) => parseFloat(value),
    text: attrString,
    desc: attrString,
    decimals: (value: string) => parseInt(value, 10),
    min: (value: string) => parseFloat(value),
    max: (value: string) => parseFloat(value),
    parent: attrString,
  } as const satisfies MappingTableEx<NumberParam>;
  return compileParam("number", 0, tokens, NUMBER);
};

const compileNumberArrayParam = (
  tokens: Record<string, string>
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
  return compileArrayParam("number[]", tokens, NUMBER_ARRAY);
};

const compileStringParam = (tokens: Record<string, string>) => {
  return compileParam("string", "", tokens, STRING);
};

const compileStringArrayParam = (
  tokens: Record<string, string>
): StringArrayParam => {
  const STRING_ARRAY = {
    default: (value: string): string[] => parseDeepJSON(value) as string[],
    text: attrString,
    desc: attrString,
    parent: attrString,
  } as const satisfies MappingTableEx<StringArrayParam>;
  return compileArrayParam("string[]", tokens, STRING_ARRAY);
};

const compileFileParam = (tokens: Record<string, string>): FileParam => {
  const FILE = {
    default: attrString,
    text: attrString,
    desc: attrString,
    parent: attrString,
    dir: attrString,
  } as const satisfies MappingTableEx<FileParam>;
  return {
    dir: "",
    ...compileParam("file", "", tokens, FILE),
    kind: "file",
  };
};

const compileFileArrayParam = (
  tokens: Record<string, string>
): FileArrayParam => {
  const FILE_ARRAY = {
    default: (value: string): string[] => parseDeepJSON(value) as string[],
    text: attrString,
    desc: attrString,
    parent: attrString,
    dir: attrString,
  } as const satisfies MappingTableEx<FileArrayParam>;
  return {
    dir: "",
    ...compileArrayParam("file[]", tokens, FILE_ARRAY),
  };
};

const compileDataIdArray = <
  Kind extends DataKind_RpgUnion | DataKind_SystemUnion
>(
  tokens: Record<string, string>,
  kind: `${Kind}[]`
) => {
  const DATA_ID_ARRAY = {
    default: numberArray,
    text: attrString,
    desc: attrString,
    parent: attrString,
  } as const;
  return compileArrayParam(kind, tokens, DATA_ID_ARRAY);
};

const compileDataId = <Kind extends DataKind_RpgUnion | DataKind_SystemUnion>(
  tokens: Record<string, string>,
  kind: Kind
) => {
  const DATA_ID = {
    default: (value: string) => parseInt(value, 10),
    text: attrString,
    desc: attrString,
    parent: attrString,
  } as const satisfies MappingTableEx<GenericIdParam>;
  return compileParam(kind, 0, tokens, DATA_ID);
};

const TABLE2 = {
  boolean: compileBooleanParam,
  string: compileStringParam,
  "string[]": compileStringArrayParam,
  number: compileNumberParam,
  "number[]": compileNumberArrayParam,
  //  combo: compileComboParam,
  // select: compileSelectParam,
  file: compileFileParam,
  "file[]": compileFileArrayParam,
  enemy: (tokens: Record<string, string>) => compileDataId(tokens, "enemy"),
  "enemy[]": (tokens: Record<string, string>) =>
    compileDataIdArray(tokens, "enemy[]"),
  item: (tokens: Record<string, string>) => compileDataId(tokens, "item"),
  "item[]": (tokens: Record<string, string>) =>
    compileDataIdArray(tokens, "item[]"),
  skill: (tokens: Record<string, string>) => compileDataId(tokens, "skill"),
  "skill[]": (tokens: Record<string, string>) =>
    compileDataIdArray(tokens, "skill[]"),
  actor: (tokens: Record<string, string>) => compileDataId(tokens, "actor"),
  "actor[]": (tokens: Record<string, string>) =>
    compileDataIdArray(tokens, "actor[]"),
  class: (tokens: Record<string, string>) => compileDataId(tokens, "class"),
  "class[]": (tokens: Record<string, string>) =>
    compileDataIdArray(tokens, "class[]"),
  weapon: (tokens: Record<string, string>) => compileDataId(tokens, "weapon"),
  "weapon[]": (tokens: Record<string, string>) =>
    compileDataIdArray(tokens, "weapon[]"),
  armor: (tokens: Record<string, string>) => compileDataId(tokens, "armor"),
  "armor[]": (tokens: Record<string, string>) =>
    compileDataIdArray(tokens, "armor[]"),
  state: (tokens: Record<string, string>) => compileDataId(tokens, "state"),
  "state[]": (tokens: Record<string, string>) =>
    compileDataIdArray(tokens, "state[]"),
  troop: (tokens: Record<string, string>) => compileDataId(tokens, "troop"),
  "troop[]": (tokens: Record<string, string>) =>
    compileDataIdArray(tokens, "troop[]"),
  common_event: (tokens: Record<string, string>) =>
    compileDataId(tokens, "common_event"),
  "common_event[]": (tokens: Record<string, string>) =>
    compileDataIdArray(tokens, "common_event[]"),
  variable: (tokens: Record<string, string>) =>
    compileDataId(tokens, "variable"),
  "variable[]": (tokens: Record<string, string>) =>
    compileDataIdArray(tokens, "variable[]"),
  switch: (tokens: Record<string, string>) => compileDataId(tokens, "switch"),
  "switch[]": (tokens: Record<string, string>) =>
    compileDataIdArray(tokens, "switch[]"),
} as const satisfies Partial<{
  [K in StructParamPrimitive["kind"]]: (
    tokens: Record<string, string>,
    options: string[]
  ) => StructParamPrimitive;
}>;
