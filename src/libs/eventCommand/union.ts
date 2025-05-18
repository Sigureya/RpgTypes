import type { Command2_CommonEvent } from "./commands/callCommonEvent/types";
import type { Command2_InputNumber } from "./commands/message/inputNumber/types";
import type {
  Command_ScrollTextBody,
  Command_ScrollTextHeader,
} from "./commands/message/scrollText/types";
import type {
  Command_ShowChoices,
  Command_ShowChoiceWhen,
} from "./commands/message/setupChoice";

export type EventCommandUnion =
  | Command2_CommonEvent
  | Command2_InputNumber
  | Command_ScrollTextBody
  | Command_ScrollTextHeader
  | Command_ShowChoices
  | Command_ShowChoiceWhen;
