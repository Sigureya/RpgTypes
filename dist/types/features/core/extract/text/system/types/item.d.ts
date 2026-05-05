import { Terms_GameCommands, Terms_Messages, Terms_Basic, SystemLabels_TermsParamNames } from '../../../../../../rmmz';
import { ExtractedTextItemG } from '../../../sss';
import { SystemKinds } from './meta';
export type SystemTermsKeyType<Prefix extends string, T> = `${Prefix}.${Extract<keyof T, string>}`;
export type ExtractedGameCommandsTextItem<UUID> = ExtractedTextItemG<UUID, SystemTermsKeyType<"commands", Terms_GameCommands>>;
export type ExtractedSystemMessageItem<UUID> = ExtractedTextItemG<UUID, SystemTermsKeyType<"messages", Terms_Messages>>;
export type ExtractedBasicTermsTextItem<UUID> = ExtractedTextItemG<UUID, SystemTermsKeyType<"basic", Terms_Basic>>;
export type ExtractedParamsTextItem<UUID> = ExtractedTextItemG<UUID, SystemTermsKeyType<"params", SystemLabels_TermsParamNames>>;
export type ExtractedSystemTextItem<UUID = string> = ExtractedTextItemG<UUID, keyof SystemKinds> | ExtractedGameCommandsTextItem<UUID> | ExtractedSystemMessageItem<UUID> | ExtractedBasicTermsTextItem<UUID> | ExtractedParamsTextItem<UUID>;
