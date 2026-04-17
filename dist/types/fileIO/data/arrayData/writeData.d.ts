import { IdentifiedItems } from '../../../libs';
import { Data_Actor, Data_Animation, Data_Armor, Data_Class, Data_CommonEvent, Data_Enemy, Data_Item, Data_MapInfo, Data_Skill, Data_State, Data_Tileset, Data_Troop, Data_Weapon } from '../../../rmmz';
import { MainDataFileNames } from './types';
export interface DDDD {
    actors: IdentifiedItems<Data_Actor>;
    classes: IdentifiedItems<Data_Class>;
    skills: IdentifiedItems<Data_Skill>;
    items: IdentifiedItems<Data_Item>;
    weapons: IdentifiedItems<Data_Weapon>;
    armors: IdentifiedItems<Data_Armor>;
    enemies: IdentifiedItems<Data_Enemy>;
    troops: IdentifiedItems<Data_Troop>;
    states: IdentifiedItems<Data_State>;
    animations: IdentifiedItems<Data_Animation>;
    tilesets: IdentifiedItems<Data_Tileset>;
    commonEvents: IdentifiedItems<Data_CommonEvent>;
    mapInfos: IdentifiedItems<Data_MapInfo>;
}
export declare const writeData: <T>(filename: MainDataFileNames, items: IdentifiedItems<T>, fileWriteFn: (filename: MainDataFileNames, json: string) => Promise<void>) => Promise<void>;
export declare const writeMainData: (data: DDDD, fileWriteFn: (filename: MainDataFileNames, json: string) => Promise<void>) => Promise<void[]>;
