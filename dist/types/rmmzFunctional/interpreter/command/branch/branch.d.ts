import { BranchParam_Character, BranchParam_Enemy, BranchParam_Timer, Command_ConditionalBranch } from '../../../../rmmz/eventCommand';
import { Provider_GameObjects, Rmmz_GameObjects, Rmmz_Timer } from '../../../../rmmzRuntime';
import { Provider_RpgData } from '../../../../rmmz/rpg';
export declare const evaluteBranchCommand: (mapEventId: number, { parameters }: Command_ConditionalBranch, dataProvider: Provider_RpgData, objectProvider: Provider_GameObjects, { actors, party, variables, switches, timer, selfSwitches }: Rmmz_GameObjects) => boolean;
export declare const evaluteBranchByTimer: (parameters: BranchParam_Timer, timer: Rmmz_Timer) => boolean;
export declare const evaluteBranchByEnemy: (parameters: BranchParam_Enemy, provider: Provider_GameObjects) => boolean;
export declare const evaluteBranchByCharacter: (parameters: BranchParam_Character, provider: Provider_GameObjects) => boolean;
