import type { ExtractedTextItem } from "@RpgTypes/libs";
import type {
  Terms_GameCommands,
  Terms_Messages,
  Terms_Basic,
  SystemLabels_TermsParamNames,
} from "@RpgTypes/rmmz";
import type { ExtractedSystemKinds } from "./kinds";

export type SystemTermsKeyType<
  Prefix extends string,
  T,
> = `${Prefix}.${Extract<keyof T, string>}`;

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
  | ExtractedSystemKinds<UUID>
  | ExtractedGameCommandsTextItem<UUID>
  | ExtractedSystemMessageItem<UUID>
  | ExtractedBasicTermsTextItem<UUID>
  | ExtractedParamsTextItem<UUID>;
