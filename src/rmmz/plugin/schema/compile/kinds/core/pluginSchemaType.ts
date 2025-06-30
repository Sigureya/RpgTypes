import type {
  BooleanParam,
  StructArrayRefParam,
  StructRefParam,
  PrimitiveParam,
} from "./primitiveParams";

export interface PrimitiveStructBase {
  struct: string;
  params: Record<string, PrimitiveParam>;
}

export type PrimitiveParams<T extends object> = {
  [K in Extract<keyof T, string>]: PluginSchemaType<T[K]>;
};

export type PluginSchemaType<T> = T extends boolean
  ? BooleanParam
  : T extends number
  ? Extract<PrimitiveParam, { default: number }>
  : T extends string
  ? Extract<PrimitiveParam, { default: string }>
  : T extends number[]
  ? Extract<PrimitiveParam, { default: number[] }>
  : T extends string[]
  ? Extract<PrimitiveParam, { default: string[] }>
  : T extends null
  ? {
      kind: "null is Forbidden";
      default?: null;
    }
  : T extends undefined
  ? {
      kind: "undefined is Forbidden";
    }
  : T extends boolean[]
  ? { kind: "boolean[] is Forbidden" }
  : T extends object[]
  ? StructArrayRefParam
  : T extends object
  ? StructRefParam
  : never;
