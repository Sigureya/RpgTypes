import { withTexts } from "./core/primitive";
import type { KidnOfStructBase } from "./core/primitiveParams";
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

export const makeStructRef = (ref: KidnOfStructBase) => ({
  $ref: `#/definitions/${ref.struct}`,
  ...withTexts(ref),
});
