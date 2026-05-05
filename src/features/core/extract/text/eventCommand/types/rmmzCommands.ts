import type { SHOW_MESSAGE_BODY } from "@RpgTypes/libs/eventCommand";
import type { TextCommandCodeUnion } from "@RpgTypes/libs/eventCommand/codeUnion";
import type { CommandParameter } from "@RpgTypes/rmmz";
import type { TextPluginCommandParameter } from "./pluginCommand";
import type { TextCommandParameter } from "./union";

export interface GenericCommandParameter extends CommandParameter<
  string,
  TextCommandCodeUnion
> {
  paramIndex: number;
  value: string;
  code: TextCommandCodeUnion;
  speaker?: string;
}

export interface MessageCommandParameter extends CommandParameter<
  string,
  typeof SHOW_MESSAGE_BODY
> {
  speaker: string;
  paramIndex: number;
  value: string;
  code: typeof SHOW_MESSAGE_BODY;
}

export interface ExtractedEventText<
  P extends TextPluginCommandParameter = TextPluginCommandParameter,
> {
  eventId: number;
  pageIndex: number;
  commands: (TextCommandParameter | P)[];
}
