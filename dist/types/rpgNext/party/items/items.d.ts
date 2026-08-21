import { Command_ControlVariables_FromArmor, Command_ControlVariables_FromItem, Command_ControlVariables_FromWeapon } from '../../../rmmz';
import { RmNext_PartyItems } from './types';
export declare const numArmors: (command: Command_ControlVariables_FromArmor, party: RmNext_PartyItems) => number;
export declare const numWeapons: (command: Command_ControlVariables_FromWeapon, party: RmNext_PartyItems) => number;
export declare const numItems: (command: Command_ControlVariables_FromItem, party: RmNext_PartyItems) => number;
