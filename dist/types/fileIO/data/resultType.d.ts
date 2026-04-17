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
    actor: unknown;
    armor: unknown;
    classes: unknown;
    commonEvent: unknown;
    enemies: unknown;
    item: unknown;
    mapInfo: unknown;
    skill: unknown;
    state: unknown;
    troop: unknown;
    weapon: unknown;
    mapFiles: MapBatchReadResult<unknown>;
    system: unknown;
    tilesets: unknown;
    animations: unknown;
}
export interface ReadGameDataUnknown extends ReadAllDataFields {
    actor: ReadHandledResult<unknown>;
    armor: ReadHandledResult<unknown>;
    classes: ReadHandledResult<unknown>;
    commonEvent: ReadHandledResult<unknown>;
    enemies: ReadHandledResult<unknown>;
    item: ReadHandledResult<unknown>;
    mapInfo: ReadArrayResult<Data_MapInfo>;
    skill: ReadHandledResult<unknown>;
    state: ReadHandledResult<unknown>;
    system: ReadSystemResult<unknown>;
    troop: ReadHandledResult<unknown>;
    weapon: ReadHandledResult<unknown>;
    mapFiles: MapBatchReadResult<unknown>;
    animations: ReadHandledResult<unknown>;
    tilesets: ReadHandledResult<unknown>;
}
export interface ReadGameDataResult<Common, Map, System, Actor, Skill, Item, Weapon, Armor, Enemy, Class, State, Troop, Animation, Tileset> extends ReadAllDataFields {
    actor: ReadHandledResult<Actor>;
    armor: ReadHandledResult<Armor>;
    classes: ReadHandledResult<Class>;
    commonEvent: ReadHandledResult<Common>;
    enemies: ReadHandledResult<Enemy>;
    item: ReadHandledResult<Item>;
    mapInfo: ReadArrayResult<Data_MapInfo>;
    skill: ReadHandledResult<Skill>;
    state: ReadHandledResult<State>;
    system: ReadSystemResult<System>;
    troop: ReadHandledResult<Troop>;
    weapon: ReadHandledResult<Weapon>;
    mapFiles: MapBatchReadResult<Map>;
    animations: ReadHandledResult<Animation>;
    tilesets: ReadHandledResult<Tileset>;
}
export interface ReadGameDataResultNullable<Common, Map, System, Actor, Skill, Item, Weapon, Armor, Enemy, Class, State, Troop, Animation, Tileset> extends ReadAllDataFields {
    actor: ReadHandledResult<Actor, null>;
    armor: ReadHandledResult<Armor, null>;
    classes: ReadHandledResult<Class, null>;
    commonEvent: ReadHandledResult<Common, null>;
    enemies: ReadHandledResult<Enemy, null>;
    item: ReadHandledResult<Item, null>;
    mapInfo: ReadArrayResult<Data_MapInfo>;
    skill: ReadHandledResult<Skill, null>;
    state: ReadHandledResult<State, null>;
    system: ReadSystemResult<System>;
    troop: ReadHandledResult<Troop, null>;
    weapon: ReadHandledResult<Weapon, null>;
    mapFiles: MapBatchReadResult<Map>;
    animations: ReadHandledResult<Animation, null>;
    tilesets: ReadHandledResult<Tileset, null>;
}
export interface RawGameData extends ReadAllDataFields {
    actor: ReadArrayResult<Data_Actor>;
    armor: ReadArrayResult<Data_Armor>;
    classes: ReadArrayResult<Data_Class>;
    commonEvent: ReadArrayResult<Data_CommonEvent>;
    enemies: ReadArrayResult<Data_Enemy>;
    item: ReadArrayResult<Data_Item>;
    mapInfo: ReadArrayResult<Data_MapInfo>;
    skill: ReadArrayResult<Data_Skill>;
    state: ReadArrayResult<Data_State>;
    system: ReadSystemResult;
    troop: ReadArrayResult<Data_Troop>;
    weapon: ReadArrayResult<Data_Weapon>;
    tilesets: ReadArrayResult<Data_Tileset>;
    animations: ReadArrayResult<Data_Animation>;
    mapFiles: MapBatchReadResult<Data_Map>;
}
