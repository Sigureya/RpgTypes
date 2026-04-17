import { Data_Actor, Data_Animation, Data_Armor, Data_Class, Data_CommonEvent, Data_Enemy, Data_Item, Data_Map, Data_MapInfo, Data_Skill, Data_State, Data_Tileset, Data_Troop, Data_Weapon } from '../../rmmz';
import { ReadArrayResult } from './arrayData';
import { MapBatchReadResult } from './map';
import { ReadSystemResult } from './system';
export interface ReadHandledResult<T, NullValue = T extends unknown[] ? [] : T extends object ? null : never> {
    success: boolean;
    fileName: string;
    data: T | NullValue;
    error: string;
}
export type ReadHandledArrayResult<T> = ReadHandledResult<T[]>;
export interface ReadAllDataFields {
    actors: unknown;
    armors: unknown;
    classes: unknown;
    commonEvents: unknown;
    enemies: unknown;
    items: unknown;
    mapInfos: unknown;
    skills: unknown;
    states: unknown;
    troops: unknown;
    weapons: unknown;
    mapFiles: MapBatchReadResult<unknown>;
    system: unknown;
    tilesets: unknown;
    animations: unknown;
}
export interface ReadGameDataUnknown extends ReadAllDataFields {
    actors: ReadHandledResult<unknown>;
    armors: ReadHandledResult<unknown>;
    classes: ReadHandledResult<unknown>;
    commonEvents: ReadHandledResult<unknown>;
    enemies: ReadHandledResult<unknown>;
    items: ReadHandledResult<unknown>;
    mapInfos: ReadArrayResult<Data_MapInfo>;
    skills: ReadHandledResult<unknown>;
    states: ReadHandledResult<unknown>;
    system: ReadSystemResult<unknown>;
    troops: ReadHandledResult<unknown>;
    weapons: ReadHandledResult<unknown>;
    mapFiles: MapBatchReadResult<unknown>;
    animations: ReadHandledResult<unknown>;
    tilesets: ReadHandledResult<unknown>;
}
export interface ReadGameDataResult<Common, Map, System, Actor, Skill, Item, Weapon, Armor, Enemy, Class, State, Troop, Animation, Tileset> extends ReadAllDataFields {
    actors: ReadHandledResult<Actor>;
    armors: ReadHandledResult<Armor>;
    classes: ReadHandledResult<Class>;
    commonEvents: ReadHandledResult<Common>;
    enemies: ReadHandledResult<Enemy>;
    items: ReadHandledResult<Item>;
    mapInfos: ReadArrayResult<Data_MapInfo>;
    skills: ReadHandledResult<Skill>;
    states: ReadHandledResult<State>;
    system: ReadSystemResult<System>;
    troops: ReadHandledResult<Troop>;
    weapons: ReadHandledResult<Weapon>;
    mapFiles: MapBatchReadResult<Map>;
    animations: ReadHandledResult<Animation>;
    tilesets: ReadHandledResult<Tileset>;
}
export interface ReadGameDataResultNullable<Common, Map, System, Actor, Skill, Item, Weapon, Armor, Enemy, Class, State, Troop, Animation, Tileset> extends ReadAllDataFields {
    actors: ReadHandledResult<Actor, null>;
    armors: ReadHandledResult<Armor, null>;
    classes: ReadHandledResult<Class, null>;
    commonEvents: ReadHandledResult<Common, null>;
    enemies: ReadHandledResult<Enemy, null>;
    items: ReadHandledResult<Item, null>;
    mapInfos: ReadArrayResult<Data_MapInfo>;
    skills: ReadHandledResult<Skill, null>;
    states: ReadHandledResult<State, null>;
    system: ReadSystemResult<System>;
    troops: ReadHandledResult<Troop, null>;
    weapons: ReadHandledResult<Weapon, null>;
    mapFiles: MapBatchReadResult<Map>;
    animations: ReadHandledResult<Animation, null>;
    tilesets: ReadHandledResult<Tileset, null>;
}
export interface RawGameData extends ReadAllDataFields {
    actors: ReadArrayResult<Data_Actor>;
    armors: ReadArrayResult<Data_Armor>;
    classes: ReadArrayResult<Data_Class>;
    commonEvents: ReadArrayResult<Data_CommonEvent>;
    enemies: ReadArrayResult<Data_Enemy>;
    items: ReadArrayResult<Data_Item>;
    mapInfos: ReadArrayResult<Data_MapInfo>;
    skills: ReadArrayResult<Data_Skill>;
    states: ReadArrayResult<Data_State>;
    system: ReadSystemResult;
    troops: ReadArrayResult<Data_Troop>;
    weapons: ReadArrayResult<Data_Weapon>;
    tilesets: ReadArrayResult<Data_Tileset>;
    animations: ReadArrayResult<Data_Animation>;
    mapFiles: MapBatchReadResult<Data_Map>;
}
