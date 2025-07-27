import { Command_ControlSelfSwitch, ParamObject_SelfSwitch, ParamArray_SelfSwitch } from './types';
export declare function makeCommandSelfSwitch(params: ParamObject_SelfSwitch): Command_ControlSelfSwitch;
export declare function fromArraySelfSwitch(array: ParamArray_SelfSwitch): ParamObject_SelfSwitch;
export declare function toArraySelfSwitch(object: Partial<ParamObject_SelfSwitch>): ParamArray_SelfSwitch;
export declare function isSelfSwitchCommand(command: Command_ControlSelfSwitch | unknown): command is Command_ControlSelfSwitch;
