import { ExtractedText, Data_State } from '@sigureya/rpgtypes';
import { ExtractedTextBundle, RmmzTextPropertys } from './types';
export type KeyRecord<T> = Record<ExtractedText<T>["main"][number]["key"], string> & {
    note: string;
};
export declare const convertStateData: <UUID>(extracted: readonly ExtractedText<Data_State>[], filename: string, terms: RmmzTextPropertys, uuidGen: (text: string) => UUID) => ExtractedTextBundle<Data_State, UUID>[];
export declare const convertDataList: <T, UUID>(extracted: readonly ExtractedText<T>[], filename: string, terms: KeyRecord<T>, uuidGen: (text: string) => UUID) => ExtractedTextBundle<T, UUID>[];
export declare const convertData: <T, UUID>(extracted: ExtractedText<T>, filename: string, terms: KeyRecord<T>, uuidGen: (text: string) => UUID) => ExtractedTextBundle<T, UUID>;
