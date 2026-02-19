import { EventCommandLike, CONTROL_SWITCHES } from '../../../../../libs/eventCommand';
import { ValueOf } from '../../../../../libs/templates/valueOf';
import { Toggle } from '../../../../utils';
export interface Command_ControlSwitches extends EventCommandLike<typeof CONTROL_SWITCHES> {
    parameters: ParamArray_ControlSwitches;
}
export type ParamArray_ControlSwitches = [
    min: number,
    max: number,
    value: ValueOf<Toggle>
];
export interface Paramobject_ControlSwitches {
    min: number;
    max: number;
    value: ValueOf<Toggle>;
}
