import { EventCommandLike2 } from '../../frame';
import { ValueOf } from '../../../../libs/templates/valueOf';
export interface Command_ControlTimer extends EventCommandLike2<124> {
    parameters: [operation: ValueOf<Operation_PlusMinus>, time: number];
}
export type Operation_PlusMinus = {
    plus: 0;
    minus: 1;
};
export interface Paramobject_ControlTimer {
    operation: "plus" | "minus";
    time: number;
}
