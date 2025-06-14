import type { SourceIdentifierBase } from "src/namedItemSource";

export interface SourceId_Data<Kind extends string>
  extends SourceIdentifierBase<{
    author: "rmmz";
    module: "data";
  }> {
  author: "rmmz";
  module: "data";
  kind: Kind;
}

export type SourceId_DataActor = SourceId_Data<"actor">;
export type SourceId_DataArmor = SourceId_Data<"armor">;
export type SourceId_DataClass = SourceId_Data<"class">;
export type SourceId_DataEnemy = SourceId_Data<"enemy">;
export type SourceId_DataItem = SourceId_Data<"item">;
export type SourceId_DataSkill = SourceId_Data<"skill">;
export type SourceId_DataState = SourceId_Data<"state">;
export type SourceId_DataWeapon = SourceId_Data<"weapon">;
export type SourceId_DataTroop = SourceId_Data<"troop">;

export type SourceId_DataCommonEvent = SourceId_Data<"common_event">;

export type SourceIdUnion_RpgData =
  | SourceId_DataActor
  | SourceId_DataArmor
  | SourceId_DataClass
  | SourceId_DataEnemy
  | SourceId_DataItem
  | SourceId_DataSkill
  | SourceId_DataState
  | SourceId_DataWeapon
  | SourceId_DataCommonEvent
  | SourceId_DataTroop;
