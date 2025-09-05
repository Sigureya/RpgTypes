import { EventCommandLike } from '../../../..';
export type ParamArray_SelfSwitch = [switchName: string, value: 0 | 1];
export interface ParamObject_SelfSwitch {
    switchName: string;
    value: 0 | 1;
}
export interface Command_ControlSelfSwitch extends EventCommandLike<123> {
    parameters: ParamArray_SelfSwitch;
}
