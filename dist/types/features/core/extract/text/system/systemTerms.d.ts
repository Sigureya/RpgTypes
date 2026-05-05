import { Terms_GameCommands, Terms_Messages, Terms_Basic, SystemLabels_TermsParamNames } from '@sigureya/rpgtypes';
import { ExtractedGameCommandsTextItem, ExtractedSystemMessageItem, ExtractedBasicTermsTextItem, ExtractedParamsTextItem } from '../../sss/types';
export declare const gameCommands: <UUID>(terms: Terms_GameCommands, filename: string, uuidGen: (text: string) => UUID, kindFn: (key: keyof Terms_GameCommands) => string) => ExtractedGameCommandsTextItem<UUID>[];
export declare const systemMessages: <UUID>(terms: Terms_Messages, filename: string, uuidGen: (text: string) => UUID, kindFn: (key: keyof Terms_Messages) => string) => ExtractedSystemMessageItem<UUID>[];
export declare const basicTerms: <UUID>(terms: Terms_Basic, filename: string, uuidGen: (text: string) => UUID, kindFn: (key: keyof Terms_Basic) => string) => ExtractedBasicTermsTextItem<UUID>[];
export declare const systemParams: <UUID>(terms: SystemLabels_TermsParamNames, filename: string, uuidGen: (text: string) => UUID, kindFn: (key: keyof SystemLabels_TermsParamNames) => string) => ExtractedParamsTextItem<UUID>[];
