import type { NewRmmzParam_Boolean } from "./newParamType";
import type { NumberArg } from "./numbers";
import type { AnnotationBase } from "./oldTypes/annotationBase";
import type { ToArrayAnnotation } from "./primitiveArray";
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

export interface StringSelect extends RmmzParamCore_Select {}

export type Primitive_Strings =
  | StringArg
  | MultilineString
  | FilePathAnnotation
  | ComboAnnotation
  | StringSelect;

export type BooleanArg = NewRmmzParam_Boolean;
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
type List = [
  NumberArg,
  Actor,
  Switch,
  Armor,
  Skill,
  Item,
  Weapon,
  Troop,
  Class,
  State,
  CommonEvent,
  NumberSelect
];

export type Primitive_Numbers = List[number];
export type Primitive_NumbersArray = ToArrayAnnotation<Primitive_Numbers>;
export type Primitive_StringsArray = ToArrayAnnotation<Primitive_Strings>;
interface NumberSelectOption {
  value: number;
  option: string;
}

export interface NumberSelect extends AnnotationBase {
  type: "select";
  default: number;
  options: NumberSelectOption[];
}
