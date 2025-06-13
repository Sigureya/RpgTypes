import type { AnnotationBase } from "./annotationBase";
import type { ToArrayAnnotation } from "./primitiveArray";
import type { Select } from "./select";

export interface StringArg extends AnnotationBase {
  type: "string";
  default: string;
}

export interface MultilineString extends AnnotationBase {
  type: "multiline_string";
  default: string;
}

export interface FilePathAnnotation extends AnnotationBase {
  type: "file";
  default: string;
  dir: string;
}
export interface ComboAnnotation extends AnnotationBase {
  default: string;
  type: "combo";
  options: string[];
}

export interface StringSelect extends Select<string> {}

export type Primitive_Strings =
  | StringArg
  | MultilineString
  | FilePathAnnotation
  | ComboAnnotation
  | StringSelect;

export type Primitive_StringsArray = ToArrayAnnotation<Primitive_Strings>;
