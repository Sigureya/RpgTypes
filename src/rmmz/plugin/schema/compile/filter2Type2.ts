import type {
  ArrayParam,
  PrimitiveParam,
  StructArrayRefParam,
  StructRefParam,
} from "./kinds";

export interface XX {
  single: Exclude<PrimitiveParam, ArrayParam>[];
  array: Extract<PrimitiveParam, ArrayParam>[];
  struct: StructRefParam[];
  structArray: StructArrayRefParam[];
}
