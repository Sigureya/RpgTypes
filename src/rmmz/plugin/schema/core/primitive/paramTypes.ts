import type { AnnotationBase } from "./annotationBase";
import type { RmmzParamCore_DataIndex } from "./rpgData";
import type { RmmzParamCore_Select } from "./select/types";
import type {
  RmmzParamCore_String,
  RmmzParamCore_FilePath,
  RmmzParamCore_Combo,
} from "./string";

export type Actor = RmmzParamCore_DataIndex<"actor"> & AnnotationBase;
export type Armor = RmmzParamCore_DataIndex<"armor"> & AnnotationBase;
export type Skill = RmmzParamCore_DataIndex<"skill"> & AnnotationBase;
export type Item = RmmzParamCore_DataIndex<"item"> & AnnotationBase;
export type Weapon = RmmzParamCore_DataIndex<"weapon"> & AnnotationBase;
export type Troop = RmmzParamCore_DataIndex<"troop"> & AnnotationBase;
export type Class = RmmzParamCore_DataIndex<"class"> & AnnotationBase;
export type State = RmmzParamCore_DataIndex<"state"> & AnnotationBase;
export type CommonEvent = RmmzParamCore_DataIndex<"common_event"> &
  AnnotationBase;
export type Variable = RmmzParamCore_DataIndex<"variable"> & AnnotationBase;
export type Switch = RmmzParamCore_DataIndex<"switch"> & AnnotationBase;

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
