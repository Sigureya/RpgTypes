import type { AnnotationBase } from "./annotationBase";
import type { NumberArg } from "./numbers";
import type {
  Actor,
  Armor,
  Class,
  CommonEvent,
  Item,
  Primitive_Strings,
  Skill,
  State,
  Switch,
  Troop,
  Weapon,
} from "./paramTypes";
import type { ToArrayAnnotation } from "./primitiveArray";
import type { RmmzParamCore_Select } from "./select/types";
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

export type NumberSelect = RmmzParamCore_Select<number> & AnnotationBase;
export type Primitive_Numbers = List[number];
export type Primitive_NumbersArray = ToArrayAnnotation<Primitive_Numbers>;
export type Primitive_StringsArray = ToArrayAnnotation<Primitive_Strings>;
