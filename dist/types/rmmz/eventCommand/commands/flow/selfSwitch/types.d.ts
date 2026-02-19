import { EventCommandLike, CONTROL_SELF_SWITCH } from '../../../../../libs/eventCommand';
export type ParamArray_SelfSwitch = [switchName: string, value: 0 | 1];
export interface ParamObject_SelfSwitch {
    switchName: string;
    value: 0 | 1;
}
export interface Command_ControlSelfSwitch extends EventCommandLike<typeof CONTROL_SELF_SWITCH> {
    parameters: ParamArray_SelfSwitch;
}
