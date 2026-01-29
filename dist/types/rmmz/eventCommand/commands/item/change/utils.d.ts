import { Command_ChangeArmors } from './types/armor';
import { Command_ChangeItems } from './types/item';
import { Command_ChangeWeapons } from './types/weapon';
export declare const isUsingVariableItemCommand: (command: Command_ChangeArmors | Command_ChangeItems | Command_ChangeWeapons) => boolean;
export declare const getItemIdFromItemCommand: (command: Command_ChangeArmors | Command_ChangeItems | Command_ChangeWeapons) => number;
