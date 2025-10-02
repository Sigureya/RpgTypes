import type { PrimitiveParam } from "@RpgTypes/rmmz/plugin/schema/compile";
import type { PrimitiveStructSchema } from "./compileFlatStruct";
import { compileFlatStruct } from "./compileFlatStruct";

export const structToJSONSchema = <T extends object>(
  params: Record<keyof T, PrimitiveParam>
): PrimitiveStructSchema<T> => {
  return compileFlatStruct(params);
};
