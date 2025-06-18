import type { AnnotationBase } from "./annotationBase";
import type { ToArrayAnnotation } from "./primitiveArray";
import type { Select } from "./select";

export interface NumberArg extends AnnotationBase {
  min?: number;
  max?: number;
  digit?: number;
  default: number;
  kind: "number";
}
export interface DataIndexArg<Name extends string> extends AnnotationBase {
  kind: Name;
  default: number;
}

export interface Actor extends DataIndexArg<"actor"> {}
export interface Switch extends DataIndexArg<"switch"> {}
export interface Armor extends DataIndexArg<"armor"> {}
export interface Skill extends DataIndexArg<"skill"> {}
export interface Item extends DataIndexArg<"item"> {}
export interface Weapon extends DataIndexArg<"weapon"> {}
export interface Troop extends DataIndexArg<"troop"> {}
export interface Class extends DataIndexArg<"class"> {}
export interface State extends DataIndexArg<"state"> {}
export interface Enemy extends DataIndexArg<"enemy"> {}
export interface CommonEvent extends DataIndexArg<"common_event"> {}
export interface NumberSelect extends Select<number> {}
type List = [
  Enemy,
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
