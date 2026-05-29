import { KeyValuePairEx } from '../../../libs';
import { Data_Actor, Data_CommonEvent, Data_Troop, Data_Map } from '../../../rmmz';
import { SummarizedNote, SummarizedNoteValue } from './note';
export declare const createRuntimeDictionaryData: <T>(actors: ReadonlyArray<Data_Actor>, commons: ReadonlyArray<Data_CommonEvent>, troops: ReadonlyArray<Data_Troop>, maps: ReadonlyArray<Data_Map>, dictionary: ReadonlyMap<string, string>, hashFn: (text: string) => T) => {
    textDictionary: KeyValuePairEx<T, string>[];
    actorTexts: KeyValuePairEx<string, T>[];
};
export declare const textKeysSN: (noteNormalization: readonly SummarizedNote<SummarizedNoteValue>[]) => string[];
