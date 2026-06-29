import { Terms_CommandArray2, Terms_GameCommands, Terms_CommandArray } from './types';
export declare const makeTermsCommandArray: (param: Partial<Terms_GameCommands>) => Terms_CommandArray2;
export declare const makeTermsCommandArrayWithNulls2: (param: Partial<Terms_GameCommands>) => Terms_CommandArray<null>;
export declare const makeTermsCommandArrayWithNulls: <T extends "" | null>(param: Partial<Terms_GameCommands>, empty: T) => Terms_CommandArray<T>;
export declare const makeTermsCommandFromArray: (param: Terms_CommandArray<"" | null>) => Terms_GameCommands;
