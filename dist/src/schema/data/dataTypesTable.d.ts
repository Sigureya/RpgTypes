import type { Data_Actor, Data_Animation, Data_Armor, Data_Class, Data_CommonEvent, Data_Enemy, Data_Item, Data_MapInfo, Data_Skill, Data_State, Data_Tileset, Data_Troop, Data_Weapon } from "./types";
export interface DataTypesTable {
    Actors: Data_Actor;
    Animations: Data_Animation;
    Armors: Data_Armor;
    Classes: Data_Class;
    CommonEvents: Data_CommonEvent;
    Enemies: Data_Enemy;
    Items: Data_Item;
    MapInfos: Data_MapInfo;
    Skills: Data_Skill;
    States: Data_State;
    Tilesets: Data_Tileset;
    Troops: Data_Troop;
    Weapons: Data_Weapon;
}
export type AnyDataType = DataTypesTable[keyof DataTypesTable];
