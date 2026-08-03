import { Command_ChangeArmors, Command_ChangeGold, Command_ChangeItems, Command_ChangeWeapons } from '../../../../rmmz/eventCommand';
import { Provider_RpgItems } from '../../../../rmmz/rpg';
import { Rmmz_UnitPlayer, Rmmz_Variables } from '../../../../rmmzRuntime';
export declare const executeChangeGold: (command: Command_ChangeGold, party: Rmmz_UnitPlayer, variables: Rmmz_Variables) => boolean;
export declare const executeChangeItems: (command: Command_ChangeItems, provider: Provider_RpgItems, party: Rmmz_UnitPlayer, variables: Rmmz_Variables) => boolean;
export declare const executeChangeWeapons: (command: Command_ChangeWeapons, provider: Provider_RpgItems, party: Rmmz_UnitPlayer, variables: Rmmz_Variables) => boolean;
export declare const executeChangeArmors: (command: Command_ChangeArmors, provider: Provider_RpgItems, party: Rmmz_UnitPlayer, variables: Rmmz_Variables) => boolean;
export declare const resolveItemAmount: (command: Command_ChangeItems | Command_ChangeWeapons | Command_ChangeArmors, variables: Rmmz_Variables) => number;
