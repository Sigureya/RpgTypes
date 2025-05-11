import type {
  Command2_CommonEvent,
  Command2_InputNumber,
  Command2_ScrollTextBody,
  Command2_ScrollTextHead,
  Command2_ShowChoices,
  Command2_ShowChoiceItem,
} from "./commands";

export type EventCommandUnion =
  | Command2_CommonEvent
  | Command2_InputNumber
  | Command2_ScrollTextBody
  | Command2_ScrollTextHead
  | Command2_ShowChoices
  | Command2_ShowChoiceItem;
