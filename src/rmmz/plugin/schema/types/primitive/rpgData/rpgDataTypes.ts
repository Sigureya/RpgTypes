export type DataTypeActor = "actor";
export type DataTypeEnemy = "enemy";
export type DataTypeClass = "class";
export type DataTypeSkill = "skill";
export type DataTypeItem = "item";
export type DataTypeWeapon = "weapon";
export type DataTypeArmor = "armor";
export type DataTypeState = "state";
export type DataTypeTroop = "troop";
export type DataTypeCommonEvent = "common_event";
export type DataTypeSwitch = "switch";
export type DataTypeVariable = "variable";

export type DataTypeUnion =
  | DataTypeActor
  | DataTypeEnemy
  | DataTypeClass
  | DataTypeSkill
  | DataTypeItem
  | DataTypeWeapon
  | DataTypeArmor
  | DataTypeState
  | DataTypeTroop
  | DataTypeCommonEvent
  | DataTypeSwitch
  | DataTypeVariable;
