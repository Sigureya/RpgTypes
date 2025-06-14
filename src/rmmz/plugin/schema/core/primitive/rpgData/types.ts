import type { AnnotationBase } from "../annotationBase";

export interface RmmzParam_DataIndex<Name extends string>
  extends AnnotationBase {
  type: Name;
  default: number;
}

export interface RmmzParam_DataIndexArray<Name extends string>
  extends AnnotationBase {
  type: `${Name}[]`;
  default: number[];
}

export type Weapon = RmmzParam_DataIndex<"weapon">;
export type Armor = RmmzParam_DataIndex<"armor">;
export type Item = RmmzParam_DataIndex<"item">;
export type Skill = RmmzParam_DataIndex<"skill">;
export type Actor = RmmzParam_DataIndex<"actor">;
export type Class = RmmzParam_DataIndex<"class">;
export type State = RmmzParam_DataIndex<"state">;
export type Troop = RmmzParam_DataIndex<"troop">;
export type CommonEvent = RmmzParam_DataIndex<"common_event">;
export type Switch = RmmzParam_DataIndex<"switch">;
