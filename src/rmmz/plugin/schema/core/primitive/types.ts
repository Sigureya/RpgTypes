import type { NumberArg } from "./numbers";
import type { ToArrayAnnotation } from "./primitiveArray";
import type {
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
} from "./rpgData";
import type { Select } from "./select";
import type { Primitive_Strings } from "./strings";

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

export type NumberSelect = Select<number>;
export type Primitive_Numbers = List[number];
export type Primitive_NumbersArray = ToArrayAnnotation<Primitive_Numbers>;
export type Primitive_StringsArray = ToArrayAnnotation<Primitive_Strings>;
