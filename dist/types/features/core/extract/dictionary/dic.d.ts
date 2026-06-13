import { FileEntry } from '../../../../fileio';
import { RuntimeDictionary, RuntimeDictionaryDataWithSystem } from './types';
export declare const findActorText: <T>(text: string, dic: RuntimeDictionary<T>) => string | undefined;
export declare const buildRuntimeDictionary: <T>(dic: RuntimeDictionaryDataWithSystem<T>) => RuntimeDictionary<T>;
export declare const fileEntriesFromDictionary: (dic: RuntimeDictionaryDataWithSystem<unknown>) => FileEntry[];
