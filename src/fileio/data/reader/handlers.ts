import type {
  Data_Skill,
  Data_Item,
  Data_MapInfo,
  Data_SystemMV,
  Data_Weapon,
  Data_Armor,
  Data_Enemy,
  Data_Class,
  Data_State,
  Data_Actor,
  Data_CommonEvent,
  Data_System,
  MapFileInfo,
  Data_Troop,
  Data_Map,
  Data_Animation,
  Data_Tileset,
} from "@RpgTypes/rmmz";

export interface RpgDataReadHandlersBase {
  readSkill(skill: Data_Skill[], filename: string): unknown;
  readItem(item: Data_Item[], filename: string): unknown;
  readWeapon(weapon: Data_Weapon[], filename: string): unknown;
  readArmor(armor: Data_Armor[], filename: string): unknown;
  readEnemy(enemy: Data_Enemy[], filename: string): unknown;
  readClass(cls: Data_Class[], filename: string): unknown;
  readState(state: Data_State[], filename: string): unknown;
  readActor(actor: Data_Actor[], filename: string): unknown;
  readCommonEvent(event: Data_CommonEvent[], filename: string): unknown;
  readTroop(troops: Data_Troop[], filename: string): unknown;
  readSystem(system: Data_System, filename: string): unknown;
  readMap(map: MapFileInfo): unknown;
  readAnimation(animation: Data_Animation[], filename: string): unknown;
  readTileset(tileset: Data_Tileset[], filename: string): unknown;
}

export interface RpgDataReadHandlers<
  Common,
  Map,
  System,
  Actor,
  Skill,
  Item,
  Weapon,
  Armor,
  Enemy,
  Class,
  State,
  Troop,
  Animation,
  Tileset,
> {
  readSkills(skill: Data_Skill[], filePath: string): Skill;
  readItems(item: Data_Item[], filePath: string): Item;
  readWeapons(weapon: Data_Weapon[], filePath: string): Weapon;
  readArmors(armor: Data_Armor[], filePath: string): Armor;
  readEnemies(enemy: Data_Enemy[], filePath: string): Enemy;
  readClasses(cls: Data_Class[], filePath: string): Class;
  readStates(state: Data_State[], filePath: string): State;
  readActors(actors: Data_Actor[], filePath: string): Actor;
  readCommonEvents(events: Data_CommonEvent[], filePath: string): Common;
  readSystem(system: Data_System, filePath: string): System;
  readMap(map: MapFileInfo): Map;
  readTroops(troops: Data_Troop[], filePath: string): Troop;
  readAnimations(animations: Data_Animation[], filePath: string): Animation;
  readTilesets(tilesets: Data_Tileset[], filePath: string): Tileset;
}

export interface ValidateFunctionsOfReadRpgData {
  validateSkill(item: unknown): item is Data_Skill;
  validateItem(item: unknown): item is Data_Item;
  validateMapInfo(item: unknown): item is Data_MapInfo;
  validateWeapon(item: unknown): item is Data_Weapon;
  validateArmor(item: unknown): item is Data_Armor;
  validateEnemy(item: unknown): item is Data_Enemy;
  validateClass(item: unknown): item is Data_Class;
  validateState(item: unknown): item is Data_State;
  validateActor(item: unknown): item is Data_Actor;
  validateCommonEvent(item: unknown): item is Data_CommonEvent;
  validateSystem(item: unknown): item is Data_System;
  validateSystemMV?(item: unknown): item is Data_SystemMV;
  validateTroop(item: unknown): item is Data_Troop;
  validateMap(item: unknown): item is Data_Map;
  validateAnimation(item: unknown): item is Data_Animation;
  validateTileset(item: unknown): item is Data_Tileset;
}
