import type { BooleanArg } from "./boolean";
import type { Primitive_Strings } from "./paramTypes";
import type {
  Primitive_Numbers,
  Primitive_NumbersArray,
  Primitive_StringsArray,
} from "./types";

export type AnnotationSigleTypes =
  | BooleanArg
  | Primitive_Numbers
  | Primitive_Strings;

export type AnnotationArrayTypes =
  | Primitive_NumbersArray
  | Primitive_StringsArray;

export type AnnotationPrimitiveTypes =
  | AnnotationSigleTypes
  | AnnotationArrayTypes;
