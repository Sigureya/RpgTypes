import type {
  SystemLabels_TermsParamNames,
  Terms_Basic,
  Terms_GameCommands,
  Terms_Messages,
} from "@RpgTypes/rmmz";
import type { ExtractedTextItemG } from "./mainData";

export interface SystemTexts<UUID = string> {
  gameTitle: string;
  texts: ExtractedTextItemG<UUID>[];
  filename: string;
}

export type SystemTermsKeyType<Prefix extends string, T> = `${Prefix}.${Extract<
  keyof T,
  string
>}`;

export interface SystemKinds {
  gameTitle: string;
  currencyUnit: string;
  equipTypes: string;
  armorTypes: string;
  weaponTypes: string;
}

export interface SystemKindHandlers {
  basic: (key: keyof Terms_Basic) => string;
  commands: (key: keyof Terms_GameCommands) => string;
  messages: (key: keyof Terms_Messages) => string;
  params: (key: keyof SystemLabels_TermsParamNames) => string;
}

export type ExtractedGameCommandsTextItem<UUID> = ExtractedTextItemG<
  UUID,
  SystemTermsKeyType<"commands", Terms_GameCommands>
>;

export type ExtractedSystemMessageItem<UUID> = ExtractedTextItemG<
  UUID,
  SystemTermsKeyType<"messages", Terms_Messages>
>;

export type ExtractedBasicTermsTextItem<UUID> = ExtractedTextItemG<
  UUID,
  SystemTermsKeyType<"basic", Terms_Basic>
>;

export type ExtractedParamsTextItem<UUID> = ExtractedTextItemG<
  UUID,
  SystemTermsKeyType<"params", SystemLabels_TermsParamNames>
>;

export type ExtractedSystemTextItem<UUID = string> =
  | ExtractedTextItemG<UUID, keyof SystemKinds>
  | ExtractedGameCommandsTextItem<UUID>
  | ExtractedSystemMessageItem<UUID>
  | ExtractedBasicTermsTextItem<UUID>
  | ExtractedParamsTextItem<UUID>;
