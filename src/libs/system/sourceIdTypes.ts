import type { SourceIdentifier } from "src/namedItemSource";

// This type uses `satisfies` to ensure type safety while avoiding circular dependencies.
// Ideally, these values would be provided via constants or functions, but doing so would increase import/export dependencies
// and make circular reference errors more likely.
// Therefore, we use `satisfies` here to maintain type safety and avoid the risk of circular dependencies.
export interface SourceId_System<Kind extends string> extends SourceIdentifier {
  author: "rmmz";
  module: "system";
  kind: Kind;
}

export type SourceId_SystemElements = SourceId_System<"elements">;
export type SourceId_SystemArmorTypes = SourceId_System<"armorTypes">;
export type SourceId_SystemEquipTypes = SourceId_System<"equipTypes">;
export type SourceId_SystemSkillTypes = SourceId_System<"skillTypes">;
export type SourceId_SystemWeaponTypes = SourceId_System<"weaponTypes">;

export type SourceId_SystemSwitches = SourceId_System<"switches">;
export type SourceId_SystemVariables = SourceId_System<"variables">;
