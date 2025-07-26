import { Command_ControlSwitches, ParamArray_ControlSwitches, Paramobject_ControlSwitches } from './types';
export declare const fromArrayControlSwitches: (param: ParamArray_ControlSwitches) => Paramobject_ControlSwitches;
export declare const toArrayControlSwitches: (object: Paramobject_ControlSwitches) => ParamArray_ControlSwitches;
export declare const makeCommandControlSwitches: (param: Paramobject_ControlSwitches, indent?: number) => Command_ControlSwitches;
