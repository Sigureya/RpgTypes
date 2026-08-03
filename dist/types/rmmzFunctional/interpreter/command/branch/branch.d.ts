import { BranchParam_Character, BranchParam_Enemy, BranchParam_Timer, Command_ConditionalBranch } from '../../../../rmmz/eventCommand';
import { Rmmz_BranchSourceParty, Rmmz_SelfSwitches, Rmmz_Switches, Rmmz_Timer, Rmmz_Variables } from '../../../../rmmzRuntime';
import { Rmmz_BranchSourceActor, Rmmz_BranchSourceProvider } from './types';
export declare const evaluteBranchCommand: (mapEventId: number, { parameters }: Command_ConditionalBranch, provider: Rmmz_BranchSourceProvider, pary: Rmmz_BranchSourceParty<Rmmz_BranchSourceActor>, switches: Rmmz_Switches, selfFwitches: Rmmz_SelfSwitches, variables: Rmmz_Variables, timer: Rmmz_Timer) => boolean;
export declare const evaluteBranchByTimer: (parameters: BranchParam_Timer, timer: Rmmz_Timer) => boolean;
export declare const evaluteBranchByEnemy: (parameters: BranchParam_Enemy, provider: Rmmz_BranchSourceProvider) => boolean;
export declare const evaluteBranchByCharacter: (parameters: BranchParam_Character, provider: Rmmz_BranchSourceProvider) => boolean;
