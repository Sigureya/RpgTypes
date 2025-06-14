import type { AnnotationBase } from "./annotationBase";
import type { RmmzParamCore_DataIndex } from "./rpgData";

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
