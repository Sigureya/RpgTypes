import { withTexts } from "./core/primitive";
import type { KindOfStructBase } from "./core/primitiveParams";
import type { KindOfStruct, KindOfStructArray, StructParam } from "./plugin";

export const isStructDef = (
  value: StructParam
): value is KindOfStruct<object> => {
  return value.kind === "struct_def";
};

export const isStructDefArray = (
  value: StructParam
): value is KindOfStructArray<object> => {
  return value.kind === "struct_def[]";
};

interface JSONSchemaSttructRef {
  $ref: string;
  description?: string;
  title?: string;
}

export const makeStructRef = (ref: KindOfStructBase): JSONSchemaSttructRef => ({
  $ref: `#/definitions/${ref.struct}`,
  ...withTexts(ref),
});
