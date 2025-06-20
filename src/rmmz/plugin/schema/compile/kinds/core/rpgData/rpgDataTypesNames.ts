export type DataKindActor = "actor";
export type DataKindEnemy = "enemy";
export type DataKindClass = "class";
export type DataKindSkill = "skill";
export type DataKindItem = "item";
export type DataKindWeapon = "weapon";
export type DataKindArmor = "armor";
export type DataKindState = "state";
export type DataKindTroop = "troop";
export type DataKindCommonEvent = "common_event";
export type DataKindSwitch = "switch";
export type DataKindVariable = "variable";

export type DataKind_RpgUnion =
  | DataKindActor
  | DataKindEnemy
  | DataKindClass
  | DataKindSkill
  | DataKindItem
  | DataKindWeapon
  | DataKindArmor
  | DataKindState
  | DataKindTroop
  | DataKindCommonEvent;

export type DataKind_SystemUnion = DataKindSwitch | DataKindVariable;
