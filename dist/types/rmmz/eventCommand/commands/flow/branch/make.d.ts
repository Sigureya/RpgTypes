import { Command_BranchBySwitch, Command_BranchBySelfSwitch, Command_BranchByTimer } from './types/command';
export declare const makeCommandBranchBySwitchON: (switchId: number, indent?: number) => Command_BranchBySwitch;
export declare const makeCommandBranchBySwitchOFF: (switchId: number, indent?: number) => Command_BranchBySwitch;
export declare const makeCommandBranchBySelfSwitchON: (selfSwitchId: string, indent?: number) => Command_BranchBySelfSwitch;
export declare const makeCommandBranchBySelfSwitchOFF: (selfSwitchId: string, indent?: number) => Command_BranchBySelfSwitch;
export declare const makeCommandBranchByTimerLess: (time: number, indent?: number) => Command_BranchByTimer;
export declare const makeCommandBranchByTimerGreater: (time: number, indent?: number) => Command_BranchByTimer;
