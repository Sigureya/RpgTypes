import type { AnnotationBase } from "./annotationBase";
import type { RmmzParamCore_DataId } from "./rpgDataId";
import type { RmmzParamCore_Select } from "./select";
import type {
  RmmzParamCore_String,
  RmmzParamCore_FilePath,
  RmmzParamCore_Combo,
} from "./string";

export type Actor = RmmzParamCore_DataId<"actor"> & AnnotationBase;
export type Armor = RmmzParamCore_DataId<"armor"> & AnnotationBase;
export type Skill = RmmzParamCore_DataId<"skill"> & AnnotationBase;
export type Item = RmmzParamCore_DataId<"item"> & AnnotationBase;
export type Weapon = RmmzParamCore_DataId<"weapon"> & AnnotationBase;
export type Troop = RmmzParamCore_DataId<"troop"> & AnnotationBase;
export type Class = RmmzParamCore_DataId<"class"> & AnnotationBase;
export type State = RmmzParamCore_DataId<"state"> & AnnotationBase;
export type CommonEvent = RmmzParamCore_DataId<"common_event"> & AnnotationBase;
export type Variable = RmmzParamCore_DataId<"variable"> & AnnotationBase;
export type Switch = RmmzParamCore_DataId<"switch"> & AnnotationBase;

export type StringArg = RmmzParamCore_String & AnnotationBase;
export type MultilineString = RmmzParamCore_String & AnnotationBase;
export type FilePathAnnotation = RmmzParamCore_FilePath & AnnotationBase;
export type ComboAnnotation = RmmzParamCore_Combo & AnnotationBase;

export interface StringSelect extends RmmzParamCore_Select<string> {}

export type Primitive_Strings =
  | StringArg
  | MultilineString
  | FilePathAnnotation
  | ComboAnnotation
  | StringSelect;

export interface BooleanArg extends AnnotationBase {
  default: boolean;
  type: "boolean";
  on?: string;
  off?: string;
}
