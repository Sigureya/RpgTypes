import { KEYWORD_OPTION, KEYWORD_TYPE } from "./parse/constants/keyword";
import type { MappingTable } from "./parse/keyword";
import { mapKeywords } from "./parse/keyword";
import type { Token } from "./parse/types/token";
import type {
  BooleanParam,
  NumberParam,
  StructParamPrimitive,
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

type XX<T> = MappingTable<Omit<T, "kind">>;

type TableType = {
  [K in StructParamPrimitive["kind"]]: XX<StructParamPrimitive & { kind: K }>;
};
const DATA_ID = {
  default: (value: string) => parseInt(value, 10),
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
} satisfies XX<NumberParam>;

const BOOLEAN = {
  default: (value: string) => value === "true",
  text: attrString,
  desc: attrString,
  on: attrString,
  off: attrString,
  parent: attrString,
} as const satisfies XX<BooleanParam>;

const comboFunc = (tokens: ReadonlyArray<Token>) => {
  const options: string[] = tokens
    .filter((t) => t.keyword === KEYWORD_OPTION)
    .map((t) => t.value);

  return {
    ...mapKeywords(tokens, table.string),
    kind: "combo",
    options,
  };
};

const table2 = {
  combo: (tokens) => comboFunc(tokens),
  boolean: (tokens) => mapKeywords(tokens, BOOLEAN),
  string: (tokens) => mapKeywords(tokens, table.string),
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
  file: (tokens) => mapKeywords(tokens, table.file),
} as const satisfies Partial<
  Record<StructParamPrimitive["kind"], (tokens: ReadonlyArray<Token>) => object>
>;

const table = {
  string: {
    default: attrString,
    text: attrString,
    desc: attrString,
    parent: attrString,
  },
  file: {
    default: attrString,
    text: attrString,
    desc: attrString,
    parent: attrString,
    dir: attrString,
  },
} satisfies Partial<TableType>;
