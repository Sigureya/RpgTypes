import { EventCommandLike, Toggle } from '../../../../rpg';
import { ValueOf } from '../../../../../libs/templates/valueOf';
export interface Command_ControlSwitches extends EventCommandLike<121> {
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
