import type { KindOfBoolean, KindOfStructRef } from "./kinds/kinds";
import type { KindOfStruct, StructParam } from "./kinds/plugin";

export type PluginSchemaType<
  T,
  path extends string = "",
  KnowTypes = never
> = T extends null
  ? {
      kind: "null is Forbidden";
      default?: null;
    }
  : T extends undefined
  ? {
      kind: "undefined is Forbidden";
    }
  : T extends boolean
  ? KindOfBoolean & { bool: true }
  : T extends number
  ? Extract<StructParam, { default: number }> & { num: true }
  : T extends string
  ? Extract<StructParam, { default: string }> & { str: true }
  : T extends number[]
  ? Extract<StructParam, { default: number[] }> & { numArray: true }
  : T extends string[]
  ? Extract<StructParam, { default: string[] }> & { strArray: true }
  : T extends boolean[]
  ? { kind: "boolean[] is Forbidden" } & { boolArray: true }
  : T extends KnowTypes
  ? KindOfStructRef
  : T extends object
  ? KindOfStructRef | KindOfStruct<T>
  : {
      kind: `never:${path}`;
    };

const str: PluginSchemaType<string> = {
  kind: "string",
  default: "",
  str: true,
};

const armor: PluginSchemaType<number> = {
  kind: "armor",
  default: 0,
  num: true,
};

const actor: PluginSchemaType<number[]> = {
  kind: "actor[]",
  default: [],
  numArray: true,
};

const boolean: PluginSchemaType<boolean> = {
  kind: "boolean",
  default: false,
  bool: true,
};

const strArray: PluginSchemaType<string[]> = {
  kind: "string[]",
  default: [],
  strArray: true,
};

const boolArray: PluginSchemaType<boolean[]> = {
  kind: "boolean[] is Forbidden",
  boolArray: true,
};

const nullT: PluginSchemaType<null> = {
  kind: "null is Forbidden",
  default: null,
};
const undefinedT: PluginSchemaType<undefined> = {
  kind: "undefined is Forbidden",
};

interface Person {
  age: number;
  name: string;
}
const structRef: PluginSchemaType<Person> = {
  kind: "struct_ref",
  ref: "Person",
};

const struct: PluginSchemaType<Person> = {
  kind: "struct",
  struct: "StructName",
  params: {
    age: {
      kind: "number",
      default: 0,
    },
    name: {
      kind: "string",
      default: "",
    },
  },
};
