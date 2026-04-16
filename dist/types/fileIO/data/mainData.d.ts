import { Data_Actor, Data_Class } from '../../rmmz/rpg';
import { ReadArrayResult, TermsOfReadArrayData } from './types';
export declare const readActorData: (terms: TermsOfReadArrayData, readFileFn: (filename: string) => Promise<string>, validateFn: (item: unknown) => item is Data_Actor) => Promise<ReadArrayResult<Data_Actor>>;
export declare const readClassData: (terms: TermsOfReadArrayData, readFileFn: (filename: string) => Promise<string>, validateFn: (item: unknown) => item is Data_Class) => Promise<ReadArrayResult<Data_Class>>;
