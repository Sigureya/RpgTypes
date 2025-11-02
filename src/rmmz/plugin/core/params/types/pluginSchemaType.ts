import type { PrimitiveParam } from "./paramUnion";
import type {
  BooleanParam,
  AnyStringParam,
  StructArrayRefParam,
  StructRefParam,
} from "./primitive";

export type PrimitiveStructParams<T extends object> = {
  [K in Extract<keyof T, string>]: PluginSchemaType<T[K]>;
};

export type PluginStructParamTypeEx<T> = {
  [K in Extract<keyof T, string>]: { name: K; attr: PluginSchemaType<T[K]> };
}[Extract<keyof T, string>];

export type PluginSchemaType<T> = T extends boolean
  ? BooleanParam
  : T extends number
  ? Extract<PrimitiveParam, { default: number }>
  : T extends string
  ? Extract<Exclude<PrimitiveParam, AnyStringParam>, { default: string }>
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
