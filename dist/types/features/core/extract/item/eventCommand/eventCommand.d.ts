import { Command_ChangeArmors2, Command_ChangeItems2, Command_ChangeWeapons2 } from '../../../../../rmmz/eventCommand/commands/item';
import { EventCommand2 } from '../../../../../rmmz/eventCommand/commands/union';
import { ItemCommandCode, ItemCommandParameterDirect, ItemCommandParameterVariable, ItemCommandTerms2 } from './types';
export declare const extractItemCommands: (list: ReadonlyArray<EventCommand2>, terms: ItemCommandTerms2, commandNameFn: (code: ItemCommandCode) => string) => (ItemCommandParameterDirect | ItemCommandParameterVariable)[];
export declare const extractItemChangeData: (command: Command_ChangeArmors2 | Command_ChangeItems2 | Command_ChangeWeapons2, terms: ItemCommandTerms2, commandNameFn: (code: ItemCommandCode) => string) => ItemCommandParameterDirect | ItemCommandParameterVariable;
