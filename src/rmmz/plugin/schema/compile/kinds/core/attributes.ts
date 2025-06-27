import { KEYWORD_OPTION, KEYWORD_TYPE } from "./parse/constants/keyword";
import type { MappingTable } from "./parse/keyword";
import { mapKeywords } from "./parse/keyword";
import type { Token } from "./parse/types/token";
import type {
  BooleanParam,
  NumberParam,
  StructParamPrimitive,
  ComboParam,
  FileArrayParam,
  RpgDataIdArrayParam,
  FileParam,
  GenericIdParam,
  KindOfStructBase,
  NumberArrayParam,
} from "./primitiveParams";

export const compileAttributes = (tokens: ReadonlyArray<Token>) => {
  const type = getType(tokens) ?? "string";
  const fn = table2[type as keyof typeof table2] ?? table2.string;
  return {
    ...fn(tokens),
    kind: type,
  };
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

const comboFunc = (tokens: ReadonlyArray<Token>): ComboParam => {
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

type MappingTableEx<T> = MappingTable<Omit<T, "kind">>;

const DATA_ID = {
  default: (value: string) => parseInt(value, 10),
  text: attrString,
  desc: attrString,
  parent: attrString,
} as const satisfies MappingTableEx<GenericIdParam>;

const DATA_ID_ARRAY = {
  default: numberArray,
  text: attrString,
  desc: attrString,
  parent: attrString,
} as const;

const NUMBER = {
  default: (value: string) => parseFloat(value),
  text: attrString,
  desc: attrString,
  digit: (value: string) => parseInt(value, 10),
  min: (value: string) => parseFloat(value),
  max: (value: string) => parseFloat(value),
  parent: attrString,
} as const satisfies MappingTableEx<NumberParam>;

const NUMBER_ARRAY = {
  default: numberArray,
  text: attrString,
  desc: attrString,
  digit: (value: string) => parseInt(value, 10),
  min: (value: string) => parseFloat(value),
  max: (value: string) => parseFloat(value),
  parent: attrString,
} as const satisfies MappingTableEx<NumberArrayParam>;

const BOOLEAN = {
  default: (value: string) => value === "true",
  text: attrString,
  desc: attrString,
  on: attrString,
  off: attrString,
  parent: attrString,
} as const satisfies MappingTableEx<BooleanParam>;

const STRING = {
  default: attrString,
  text: attrString,
  desc: attrString,
  parent: attrString,
} as const satisfies MappingTableEx<StructParamPrimitive & { kind: "string" }>;

const FILE = {
  default: attrString,
  text: attrString,
  desc: attrString,
  parent: attrString,
  dir: attrString,
} as const satisfies MappingTableEx<FileParam>;

const makeDataIdArray = (tokens: ReadonlyArray<Token>) =>
  mapKeywords(tokens, DATA_ID_ARRAY);

const table2 = {
  "number[]": (tokens) => mapKeywords(tokens, NUMBER_ARRAY),
  "actor[]": makeDataIdArray,
  "enemy[]": makeDataIdArray,
  "item[]": makeDataIdArray,
  "skill[]": makeDataIdArray,
  "class[]": makeDataIdArray,
  "weapon[]": makeDataIdArray,
  "armor[]": makeDataIdArray,
  "state[]": makeDataIdArray,
  combo: (tokens) => comboFunc(tokens),
  boolean: (tokens) => mapKeywords(tokens, BOOLEAN),
  string: (tokens) => mapKeywords(tokens, STRING),
  number: (tokens) => mapKeywords(tokens, NUMBER),
  enemy: (tokens) => mapKeywords(tokens, DATA_ID),
  item: (tokens) => mapKeywords(tokens, DATA_ID),
  skill: (tokens) => mapKeywords(tokens, DATA_ID),
  actor: (tokens) => mapKeywords(tokens, DATA_ID),
  class: (tokens) => mapKeywords(tokens, DATA_ID),
  weapon: (tokens) => mapKeywords(tokens, DATA_ID),
  armor: (tokens) => mapKeywords(tokens, DATA_ID),
  state: (tokens) => mapKeywords(tokens, DATA_ID),
  troop: (tokens) => mapKeywords(tokens, DATA_ID),
  variable: (tokens) => mapKeywords(tokens, DATA_ID),
  switch: (tokens) => mapKeywords(tokens, DATA_ID),
  file: (tokens) => mapKeywords(tokens, FILE),
} as const satisfies Partial<
  Record<StructParamPrimitive["kind"], (tokens: ReadonlyArray<Token>) => object>
>;
