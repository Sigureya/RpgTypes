import { Terms_GameCommands, Terms_Messages, Terms_Basic, SystemLabels_TermsParamNames } from '../../../../../rmmz';
import { ExtractedBasicTermsTextItem, ExtractedGameCommandsTextItem, ExtractedParamsTextItem, ExtractedSystemMessageItem } from './types';
export declare const convertSystemTerms: <UUID>(filename: string, tersm: {
    basic: Terms_Basic;
    commands: Terms_GameCommands;
    messages: Terms_Messages;
    params: SystemLabels_TermsParamNames;
}, uuidGen: (text: string) => UUID, basicKindFn: (key: keyof Terms_Basic) => string, commandsKindFn: (key: keyof Terms_GameCommands) => string, messagesKindFn: (key: keyof Terms_Messages) => string) => (ExtractedBasicTermsTextItem<UUID> | ExtractedGameCommandsTextItem<UUID> | ExtractedSystemMessageItem<UUID> | ExtractedParamsTextItem<UUID>)[];
export declare const gameCommands: <UUID>(terms: Terms_GameCommands, filename: string, uuidGen: (text: string) => UUID, kindFn: (key: keyof Terms_GameCommands) => string) => ExtractedGameCommandsTextItem<UUID>[];
export declare const systemMessages: <UUID>(terms: Terms_Messages, filename: string, uuidGen: (text: string) => UUID, kindFn: (key: keyof Terms_Messages) => string) => ExtractedSystemMessageItem<UUID>[];
export declare const basicTerms: <UUID>(terms: Terms_Basic, filename: string, uuidGen: (text: string) => UUID, kindFn: (key: keyof Terms_Basic) => string) => ExtractedBasicTermsTextItem<UUID>[];
export declare const systemParams: <UUID>(terms: SystemLabels_TermsParamNames, filename: string, uuidGen: (text: string) => UUID, kindFn: (key: keyof SystemLabels_TermsParamNames) => string) => ExtractedParamsTextItem<UUID>[];
