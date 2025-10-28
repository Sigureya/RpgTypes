import type {
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
  COMMENT_HEAD,
  PLUGIN_COMMAND_MZ,
  SCRIPT_EVAL,
  SHOW_CHOICES,
  SHOW_MESSAGE_BODY,
  SHOW_SCROLLING_TEXT_BODY,
} from "@RpgTypes/rmmz";
import type { CommandParameter } from "@RpgTypes/rmmz/eventCommand/pickCommandParam";

type BaseCode =
  | typeof CHANGE_NICKNAME
  | typeof CHANGE_PROFILE
  | typeof CHANGE_NAME
  | typeof SHOW_SCROLLING_TEXT_BODY
  | typeof SHOW_CHOICES
  | typeof SCRIPT_EVAL
  | typeof COMMENT_HEAD;

export type TextCommandParameter =
  | GenericCommandParameter
  | MessageCommandParameter;

export interface GenericCommandParameter
  extends CommandParameter<string, BaseCode> {
  paramIndex: number;
  value: string;
  code: BaseCode;
}

export interface PluginCommandMzParameter
  extends CommandParameter<string, typeof PLUGIN_COMMAND_MZ> {
  paramIndex: number;
  value: string;
  code: typeof PLUGIN_COMMAND_MZ;
}

export interface MessageCommandParameter
  extends CommandParameter<string, typeof SHOW_MESSAGE_BODY> {
  speaker: string;
  paramIndex: number;
  value: string;
  code: typeof SHOW_MESSAGE_BODY;
}

export interface ExtractedEventText<
  P extends PluginCommandMzParameter = PluginCommandMzParameter
> {
  eventId: number;
  pageIndex: number;
  commands: (TextCommandParameter | P)[];
}
