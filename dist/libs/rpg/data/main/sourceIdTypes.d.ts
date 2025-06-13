import { SourceIdentifierBase } from '../../../namedItemSource';
export interface SourceId_Data<Kind extends string> extends SourceIdentifierBase<{
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
export type SourceId_DataCommonEvent = SourceId_Data<"common_event">;
