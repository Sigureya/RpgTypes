import { Data_System, System_DataNames } from './system';
import { Data_Actor, Data_Skill, Data_Class, Data_Armor, Data_CommonEvent, Data_State, Data_Item, Data_Weapon, Data_Enemy, Data_Troop, Data_NamedItem, NamedItem } from './types';
export interface GlobalGameData {
    system: Data_System;
    actors: Data_Actor[];
    classes: Data_Class[];
    skills: Data_Skill[];
    items: Data_Item[];
    weapons: Data_Weapon[];
    armors: Data_Armor[];
    enemies: Data_Enemy[];
    troops: Data_Troop[];
    states: Data_State[];
    commonEvents: Data_CommonEvent[];
}
export type GlobalGameDataNamedItems = {
    [K in keyof GlobalGameData]: GlobalGameData[K] extends Array<infer T extends Data_NamedItem> ? NamedItem<T>[] : never;
} & {
    system: System_DataNames;
};
