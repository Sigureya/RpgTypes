import type { BooleanArg } from "./boolean";
import type { Primitive_Numbers, Primitive_NumbersArray } from "./numbers";
import type { Primitive_Strings, Primitive_StringsArray } from "./strings";

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
