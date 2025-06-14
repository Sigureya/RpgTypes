import type { AnnotationBase } from "../annotationBase";

export interface RmmzParamCore_DataIndex<Name extends string> {
  type: Name;
  default: number;
}

export type RmmzParamCore_Actor = RmmzParamCore_DataIndex<"actor">;
export type RmmzParamCore_Variable = RmmzParamCore_DataIndex<"variable">;
export type RmmzParamCore_Item = RmmzParamCore_DataIndex<"item">;
export type RmmzParamCore_Weapon = RmmzParamCore_DataIndex<"weapon">;
export type RmmzParamCore_Armor = RmmzParamCore_DataIndex<"armor">;
export type RmmzParamCore_Skill = RmmzParamCore_DataIndex<"skill">;
export type RmmzParamCore_Class = RmmzParamCore_DataIndex<"class">;
export type RmmzParamCore_State = RmmzParamCore_DataIndex<"state">;
export type RmmzParamCore_Troop = RmmzParamCore_DataIndex<"troop">;
export type RmmzParamCore_CommonEvent = RmmzParamCore_DataIndex<"common_event">;
export type RmmzParamCore_Switch = RmmzParamCore_DataIndex<"switch">;

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
export type Class = RmmzParam_DataIndex<"class">;
export type State = RmmzParam_DataIndex<"state">;
export type Troop = RmmzParam_DataIndex<"troop">;
export type CommonEvent = RmmzParam_DataIndex<"common_event">;
export type Switch = RmmzParam_DataIndex<"switch">;
