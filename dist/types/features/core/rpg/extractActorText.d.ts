import { KeyValuePairEx } from '../../../libs';
import { Data_Actor, Data_Map, Data_CommonEvent, Data_Troop } from '../../../rmmz';
export declare const createActorTextDictionary: <T>(actors: ReadonlyArray<Data_Actor>, maps: ReadonlyArray<Data_Map>, commons: ReadonlyArray<Data_CommonEvent>, troops: ReadonlyArray<Data_Troop>, hashFn: (text: string) => T) => KeyValuePairEx<T, string>[];
export declare const extractActorTexts: (actors: ReadonlyArray<Data_Actor>, maps: ReadonlyArray<Data_Map>, commons: ReadonlyArray<Data_CommonEvent>, troops: ReadonlyArray<Data_Troop>) => Set<string>;
