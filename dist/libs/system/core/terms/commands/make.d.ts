import { Terms_Command, Terms_CommandArray } from './types';
export declare const makeTermsCommandArray: (param: Partial<Terms_Command>) => Terms_CommandArray;
export declare const makeTermsCommandArrayWithNulls: <T extends "" | null>(param: Partial<Terms_Command>, empty: T) => Terms_CommandArray<T>;
export declare const makeTermsCommandFromArray: <T extends "" | null = "">(param: Terms_CommandArray<T>) => Terms_Command;
