import { EventCommandLike, CONTROL_TIMER } from '../../../../libs/eventCommand';
import { ValueOf } from 'src/libs/templates/valueOf';
export interface Command_ControlTimer extends EventCommandLike<typeof CONTROL_TIMER> {
    parameters: [operation: ValueOf<Operation_PlusMinus>, time: number];
}
export type Operation_PlusMinus = {
    plus: 0;
    minus: 1;
};
export type ParamArray_ControlTimer = [
    operation: ValueOf<Operation_PlusMinus>,
    time: number
];
export interface Paramobject_ControlTimer {
    operation: "plus" | "minus";
    time: number;
}
