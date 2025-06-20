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
