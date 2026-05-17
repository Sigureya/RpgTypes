import { Data_Actor, Data_CommonEvent, Data_Troop, Data_Map } from '../../../rmmz';
import { RuntimeDictionaryData } from './dictionary';
import { SummarizedNote, SummarizedNoteValue } from './note';
export declare const createRuntimeDictionaryData: <T>(actors: ReadonlyArray<Data_Actor>, commons: ReadonlyArray<Data_CommonEvent>, troops: ReadonlyArray<Data_Troop>, maps: ReadonlyArray<Data_Map>, noteNormalization: readonly SummarizedNote<SummarizedNoteValue>[], dictionary: ReadonlyMap<string, string>, hashFn: (text: string) => T) => RuntimeDictionaryData<T>;
