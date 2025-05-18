import type {
  Command_InputNumber,
  Command_CommonEvent,
  Command_ScrollTextBody,
  Command_ScrollTextHeader,
  Command_ShowChoices,
  Command_ShowChoiceWhen,
} from "./commands";

export type EventCommandUnion =
  | Command_CommonEvent
  | Command_InputNumber
  | Command_ScrollTextBody
  | Command_ScrollTextHeader
  | Command_ShowChoices
  | Command_ShowChoiceWhen;
