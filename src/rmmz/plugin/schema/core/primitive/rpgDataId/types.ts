import type { SourceIdUnion_RpgData } from "@RpgTypes/rpg";
import type {
  SourceId_SystemSwitches,
  SourceId_SystemVariables,
} from "@RpgTypes/system";
import type { AnnotationBase } from "../annotationBase";
import type { DataKindUnion } from "./rpgDataTypesNames";

export interface RmmzParamCore_DataId<Name extends DataKindUnion> {
  type: Name;
  default: number;
}

export interface X_RmmzParamCore_DataId {
  sourceId?:
    | SourceIdUnion_RpgData
    | SourceId_SystemSwitches
    | SourceId_SystemVariables;
}

export type RmmzParamCore_Actor = RmmzParamCore_DataId<"actor">;
export type RmmzParamCore_Variable = RmmzParamCore_DataId<"variable">;
export type RmmzParamCore_Item = RmmzParamCore_DataId<"item">;
export type RmmzParamCore_Weapon = RmmzParamCore_DataId<"weapon">;
export type RmmzParamCore_Armor = RmmzParamCore_DataId<"armor">;
export type RmmzParamCore_Skill = RmmzParamCore_DataId<"skill">;
export type RmmzParamCore_Class = RmmzParamCore_DataId<"class">;
export type RmmzParamCore_State = RmmzParamCore_DataId<"state">;
export type RmmzParamCore_Troop = RmmzParamCore_DataId<"troop">;
export type RmmzParamCore_CommonEvent = RmmzParamCore_DataId<"common_event">;
export type RmmzParamCore_Switch = RmmzParamCore_DataId<"switch">;

export interface RmmzParam_DataId<Name extends string> extends AnnotationBase {
  type: Name;
  default: number;
}

export interface RmmzParam_DataIndexArray<Name extends string>
  extends AnnotationBase {
  type: `${Name}[]`;
  default: number[];
}
