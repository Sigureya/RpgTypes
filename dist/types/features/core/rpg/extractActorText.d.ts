import { Data_Actor, Data_Map, Data_CommonEvent, Data_Troop } from '../../../rmmz';
export declare const extractActorTexts: (actors: ReadonlyArray<Data_Actor>, maps: ReadonlyArray<Data_Map>, commons: ReadonlyArray<Data_CommonEvent>, troops: ReadonlyArray<Data_Troop>) => Set<string>;
