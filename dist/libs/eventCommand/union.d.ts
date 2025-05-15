import { Command2_CommonEvent } from './commands/callCommonEvent/types';
import { Command2_InputNumber } from './commands/message/inputNumber/types';
import { Command2_ScrollTextBody, Command2_ScrollTextHead } from './commands/message/scrollText/types';
import { Command2_ShowChoices, Command2_ShowChoiceItem } from './commands/message/setupChoice';
export type EventCommandUnion = Command2_CommonEvent | Command2_InputNumber | Command2_ScrollTextBody | Command2_ScrollTextHead | Command2_ShowChoices | Command2_ShowChoiceItem;
