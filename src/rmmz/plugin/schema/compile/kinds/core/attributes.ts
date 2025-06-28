import { KEYWORD_OPTION, KEYWORD_TYPE } from "./parse/constants/keyword";
import type { MappingTable } from "./parse/keyword";
import { compileArrayParam, mapKeywords } from "./parse/keyword";
import { compileOptionItems } from "./parse/selectOption";
import type { Token } from "./parse/types/token";
import type {
  BooleanParam,
  NumberParam,
  StructParamPrimitive,
  ComboParam,
  FileParam,
  GenericIdParam,
  NumberArrayParam,
  RpgDataIdParam,
  SystemDataIdParam,
  StringParam,
  SelectParam,
  StringArrayParam,
  FileArrayParam,
} from "./primitiveParams";
import { parseDeepJSON } from "./rmmzJSON";
import type {
  DataKind_RpgUnion,
  DataKind_SystemUnion,
} from "./rpgData/rpgDataTypesNames";

type MappingTableEx<T> = MappingTable<Omit<T, "kind">>;

export const compileAttributes = (
  tokens: ReadonlyArray<Token>
): StructParamPrimitive => {
  const type = getType(tokens) ?? "string";
  const func = TABLE[type as keyof typeof TABLE] ?? TABLE.string;
  return func(tokens);
};

const getType = (tokens: ReadonlyArray<Token>): string | undefined => {
  const typeToken = tokens.find((t) => t.keyword === KEYWORD_TYPE);
  return typeToken ? typeToken.value : undefined;
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

const compileComboParam = (tokens: ReadonlyArray<Token>): ComboParam => {
  const options: string[] = tokens
    .filter((t) => t.keyword === KEYWORD_OPTION)
    .map((t) => t.value);

  return {
    default: options[0] ?? "",
    ...mapKeywords(tokens, STRING),
    kind: "combo",
    options,
  };
};

const compileSelectParam = (tokens: ReadonlyArray<Token>): SelectParam => {
  const options = compileOptionItems(tokens);
  return {
    default: options[0]?.value ?? "",
    ...mapKeywords(tokens, STRING),
    kind: "select",
    options,
  };
};

const compileBooleanParam = (tokens: ReadonlyArray<Token>): BooleanParam => {
  const BOOLEAN = {
    default: (value: string) => value === "true",
    text: attrString,
    desc: attrString,
    on: attrString,
    off: attrString,
    parent: attrString,
  } as const satisfies MappingTableEx<BooleanParam>;

  return {
    default: true,
    ...mapKeywords(tokens, BOOLEAN),
    kind: "boolean",
  };
};

const compileNumberParam = (tokens: ReadonlyArray<Token>): NumberParam => {
  const NUMBER = {
    default: (value: string) => parseFloat(value),
    text: attrString,
    desc: attrString,
    decimals: (value: string) => parseInt(value, 10),
    min: (value: string) => parseFloat(value),
    max: (value: string) => parseFloat(value),
    parent: attrString,
  } as const satisfies MappingTableEx<NumberParam>;

  return {
    default: 0,
    ...mapKeywords(tokens, NUMBER),
    kind: "number",
  };
};

const compileNumberArrayParam = (
  tokens: ReadonlyArray<Token>
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

  return compileArrayParam(tokens, "number[]", NUMBER_ARRAY);
};

const STRING = {
  default: attrString,
  text: attrString,
  desc: attrString,
  parent: attrString,
} as const satisfies MappingTableEx<StructParamPrimitive & { kind: "string" }>;

const compileStringParam = (tokens: ReadonlyArray<Token>): StringParam => {
  return {
    default: "",
    ...mapKeywords(tokens, STRING),
    kind: "string",
  };
};

const compileStringArrayParam = (
  tokens: ReadonlyArray<Token>
): StringArrayParam => {
  const STRING_ARRAY = {
    default: (value: string): string[] => parseDeepJSON(value) as string[],
    text: attrString,
    desc: attrString,
    parent: attrString,
  } as const satisfies MappingTableEx<StringArrayParam>;

  return compileArrayParam(tokens, "string[]", STRING_ARRAY);
};

const compileFileParam = (tokens: ReadonlyArray<Token>): FileParam => {
  const FILE = {
    default: attrString,
    text: attrString,
    desc: attrString,
    parent: attrString,
    dir: attrString,
  } as const satisfies MappingTableEx<FileParam>;
  return {
    default: "",
    dir: "",
    ...mapKeywords(tokens, FILE),
    kind: "file",
  };
};

const compileFileArrayParam = (
  tokens: ReadonlyArray<Token>
): FileArrayParam => {
  const FILE_ARRAY = {
    default: (value: string): string[] => parseDeepJSON(value) as string[],
    text: attrString,
    desc: attrString,
    parent: attrString,
    dir: attrString,
  } as const satisfies MappingTableEx<FileArrayParam>;
  return {
    default: [],
    dir: "",
    ...mapKeywords(tokens, FILE_ARRAY),
    kind: "file[]",
  } satisfies FileArrayParam;
};
const compileDataIdArray = <
  Kind extends DataKind_RpgUnion | DataKind_SystemUnion
>(
  tokens: ReadonlyArray<Token>,
  kind: `${Kind}[]`
) => {
  const DATA_ID_ARRAY = {
    default: numberArray,
    text: attrString,
    desc: attrString,
    parent: attrString,
  } as const;
  return compileArrayParam(tokens, kind, DATA_ID_ARRAY);
};

const compileDataId = <Kind extends DataKind_RpgUnion | DataKind_SystemUnion>(
  tokens: ReadonlyArray<Token>,
  kind: Kind
) => {
  const DATA_ID = {
    default: (value: string) => parseInt(value, 10),
    text: attrString,
    desc: attrString,
    parent: attrString,
  } as const satisfies MappingTableEx<GenericIdParam>;
  return {
    default: 0,
    ...mapKeywords(tokens, DATA_ID),
    kind: kind,
  } satisfies SystemDataIdParam | RpgDataIdParam;
};

const TABLE = {
  combo: compileComboParam,
  boolean: compileBooleanParam,
  string: compileStringParam,
  "string[]": compileStringArrayParam,
  multiline_string: compileStringParam,
  "multiline_string[]": compileStringArrayParam,
  number: compileNumberParam,
  "number[]": compileNumberArrayParam,
  select: compileSelectParam,
  enemy: (tokens) => compileDataId(tokens, "enemy"),
  "enemy[]": (tokens) => compileDataIdArray(tokens, "enemy[]"),
  item: (tokens) => compileDataId(tokens, "item"),
  "item[]": (tokens) => compileDataIdArray(tokens, "item[]"),
  skill: (tokens) => compileDataId(tokens, "skill"),
  "skill[]": (tokens) => compileDataIdArray(tokens, "skill[]"),
  actor: (tokens) => compileDataId(tokens, "actor"),
  "actor[]": (tokens) => compileDataIdArray(tokens, "actor[]"),
  class: (tokens) => compileDataId(tokens, "class"),
  "class[]": (tokens) => compileDataIdArray(tokens, "class[]"),
  weapon: (tokens) => compileDataId(tokens, "weapon"),
  "weapon[]": (tokens) => compileDataIdArray(tokens, "weapon[]"),
  armor: (tokens) => compileDataId(tokens, "armor"),
  "armor[]": (tokens) => compileDataIdArray(tokens, "armor[]"),
  state: (tokens) => compileDataId(tokens, "state"),
  "state[]": (tokens) => compileDataIdArray(tokens, "state[]"),
  troop: (tokens) => compileDataId(tokens, "troop"),
  "troop[]": (tokens) => compileDataIdArray(tokens, "troop[]"),
  common_event: (tokens) => compileDataId(tokens, "common_event"),
  "common_event[]": (tokens) => compileDataIdArray(tokens, "common_event[]"),
  variable: (tokens) => compileDataId(tokens, "variable"),
  "variable[]": (tokens) => compileDataIdArray(tokens, "variable[]"),
  switch: (tokens) => compileDataId(tokens, "switch"),
  "switch[]": (tokens) => compileDataIdArray(tokens, "switch[]"),
  file: compileFileParam,
  "file[]": compileFileArrayParam,
} as const satisfies Partial<{
  [K in StructParamPrimitive["kind"]]: (
    tokens: ReadonlyArray<Token>
  ) => StructParamPrimitive;
}>;
