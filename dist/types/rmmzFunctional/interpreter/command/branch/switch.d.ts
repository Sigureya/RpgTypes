import { BranchParam_SelfSwitch, BranchParam_Switch } from '../../../../rmmz/eventCommand';
import { Rmmz_SelfSwitches, Rmmz_Switches } from '../../../../rmmzRuntime';
export declare const evaluteSwitchBranch: (parameters: BranchParam_Switch, switches: Rmmz_Switches) => boolean;
export declare const evaluteSelfSwitchBranch: (parameters: BranchParam_SelfSwitch, switches: Rmmz_SelfSwitches, eventId: number) => boolean;
