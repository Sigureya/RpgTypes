import { FileEntry } from '../../../fileio';
import { Data_Actor, Data_CommonEvent, Data_Troop, Data_Map } from '../../../rmmz';
import { SummarizedNote, SummarizedNoteValue } from './note';
import { RuntimeDictionary, RuntimeDictionaryData } from './types';
export declare const findActorText: <T>(text: string, dic: RuntimeDictionary<T>) => string;
export declare const buildRuntimeDictionary: <T>(dic: RuntimeDictionaryData<T>) => RuntimeDictionary<T>;
export declare const fileEntriesFromDictionary: (dic: RuntimeDictionaryData<unknown>) => FileEntry[];
export declare const createRuntimeDictionaryData: <T>(actors: ReadonlyArray<Data_Actor>, commons: ReadonlyArray<Data_CommonEvent>, troops: ReadonlyArray<Data_Troop>, maps: ReadonlyArray<Data_Map>, noteNormalization: readonly SummarizedNote<SummarizedNoteValue>[], dictionary: ReadonlyMap<string, string>, hashFn: (text: string) => T) => RuntimeDictionaryData<T>;
