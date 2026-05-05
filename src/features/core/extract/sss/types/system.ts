import type {
  SystemLabels_TermsParamNames,
  Terms_Basic,
  Terms_GameCommands,
  Terms_Messages,
} from "@RpgTypes/rmmz";
import type { ExtractedTextItem } from "./mainData";

export interface SystemTexts<UUID = string> {
  gameTitle: string;
  texts: ExtractedTextItem<UUID>[];
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

export interface KindHandlers {
  basic: (key: keyof Terms_Basic) => string;
  commands: (key: keyof Terms_GameCommands) => string;
  messages: (key: keyof Terms_Messages) => string;
  params: (key: keyof SystemLabels_TermsParamNames) => string;
}

export type ExtractedGameCommandsTextItem<UUID> = ExtractedTextItem<
  UUID,
  SystemTermsKeyType<"commands", Terms_GameCommands>
>;

export type ExtractedSystemMessageItem<UUID> = ExtractedTextItem<
  UUID,
  SystemTermsKeyType<"messages", Terms_Messages>
>;

export type ExtractedBasicTermsTextItem<UUID> = ExtractedTextItem<
  UUID,
  SystemTermsKeyType<"basic", Terms_Basic>
>;

export type ExtractedParamsTextItem<UUID> = ExtractedTextItem<
  UUID,
  SystemTermsKeyType<"params", SystemLabels_TermsParamNames>
>;

export type ExtractedSystemTextItem<UUID = string> =
  | ExtractedTextItem<UUID, keyof SystemKinds>
  | ExtractedGameCommandsTextItem<UUID>
  | ExtractedSystemMessageItem<UUID>
  | ExtractedBasicTermsTextItem<UUID>
  | ExtractedParamsTextItem<UUID>;
