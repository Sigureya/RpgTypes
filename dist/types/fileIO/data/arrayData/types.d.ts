import { IdentifiedItems } from '../../../libs';
import { Data_Actor, Data_Class, Data_Skill, Data_Item, Data_Weapon, Data_Armor, Data_Enemy, Data_Troop, Data_State, Data_Animation, Data_Tileset, Data_CommonEvent, Data_MapInfo } from '../../../rmmz';
import type * as Name from "./constants/index";
export type MainDataFileNames = (typeof Name)[keyof typeof Name];
export interface ArrayDataErrorMessages {
    jsonParseError: string;
    notArray: string;
}
export interface ReadArrayResult<T> {
    success: boolean;
    fileName: string;
    data: T[];
    error: string;
}
export interface MainDataIdentifiedItems {
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
