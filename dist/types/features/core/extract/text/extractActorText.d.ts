import { KeyValuePairEx } from '../../../../libs';
import { Data_Actor, Data_Map, Data_CommonEvent, Data_Troop } from '../../../../rmmz';
export interface ActorTextDictionaryHandlers<T> {
    newText: (text: string) => string;
    hashText: (text: string) => T;
}
export declare const createActorTextDictionary: <T>(actors: ReadonlyArray<Data_Actor>, commons: ReadonlyArray<Data_CommonEvent>, troops: ReadonlyArray<Data_Troop>, maps: ReadonlyArray<Data_Map>, handlers: ActorTextDictionaryHandlers<T>) => KeyValuePairEx<string, T>[];
export declare const extractActorTexts: (actors: ReadonlyArray<Data_Actor>, commons: ReadonlyArray<Data_CommonEvent>, troops: ReadonlyArray<Data_Troop>, maps: ReadonlyArray<Data_Map>) => Set<string>;
