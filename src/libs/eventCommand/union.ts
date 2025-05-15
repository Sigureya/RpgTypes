import type { Command2_CommonEvent } from "./commands/callCommonEvent/types";
import type { Command2_InputNumber } from "./commands/message/inputNumber/types";
import type {
  Command2_ScrollTextBody,
  Command2_ScrollTextHead,
} from "./commands/message/scrollText/types";
import type {
  Command2_ShowChoices,
  Command2_ShowChoiceItem,
} from "./commands/message/setupChoice";

export type EventCommandUnion =
  | Command2_CommonEvent
  | Command2_InputNumber
  | Command2_ScrollTextBody
  | Command2_ScrollTextHead
  | Command2_ShowChoices
  | Command2_ShowChoiceItem;
