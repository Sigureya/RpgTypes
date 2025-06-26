import { KEYWORD_TYPE } from "./parse/constants/keyword";
import type { MappingTable } from "./parse/keyword";
import { mapKeywords } from "./parse/keyword";
import type { Token } from "./parse/types/token";
import type { BooleanParam, StructParamPrimitive } from "./primitiveParams";

export const compileAttributes = (tokens: ReadonlyArray<Token>) => {
  const type = getType(tokens) ?? "string";
  const fn = table[type as keyof typeof table] ?? table.string;
  return {
    ...mapKeywords(tokens, fn),
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

const table = {
  string: {
    default: attrString,
    text: attrString,
    desc: attrString,
    parent: attrString,
  },
  boolean: {
    default: (value: string) => value === "true",
    text: attrString,
    desc: attrString,
    on: attrString,
    off: attrString,
    parent: attrString,
  } satisfies XX<BooleanParam>,
  number: {
    default: (value: string) => parseFloat(value),
    text: attrString,
    desc: attrString,
    digit: (value: string) => parseInt(value, 10),
    min: (value: string) => parseFloat(value),
    max: (value: string) => parseFloat(value),
    parent: attrString,
  } satisfies XX<Extract<StructParamPrimitive, { kind: "number" }>>,
  enemy: DATA_ID,
  item: DATA_ID,
  skill: DATA_ID,
  actor: DATA_ID,
  class: DATA_ID,
  weapon: DATA_ID,
  armor: DATA_ID,
  state: DATA_ID,
  troop: DATA_ID,
  variable: DATA_ID,
  switch: DATA_ID,
  file: {
    default: attrString,
    text: attrString,
    desc: attrString,
    parent: attrString,
    dir: attrString,
  },
} satisfies Partial<TableType>;
