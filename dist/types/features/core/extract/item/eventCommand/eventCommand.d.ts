import { Command_ChangeArmors, Command_ChangeItems, Command_ChangeWeapons } from '../../../../../rmmz/eventCommand/commands/item/change';
import { EventCommand } from '../../../../../rmmz/eventCommand/commands/union';
import { ItemCommandCode, ItemCommandParameterDirect, ItemCommandParameterVariable, ItemCommandTerms2 } from './types';
export declare const extractItemCommands: (list: ReadonlyArray<EventCommand>, terms: ItemCommandTerms2, commandNameFn: (code: ItemCommandCode) => string) => (ItemCommandParameterDirect | ItemCommandParameterVariable)[];
export declare const extractItemChangeData: (command: Command_ChangeArmors | Command_ChangeItems | Command_ChangeWeapons, terms: ItemCommandTerms2, commandNameFn: (code: ItemCommandCode) => string) => ItemCommandParameterDirect | ItemCommandParameterVariable;
