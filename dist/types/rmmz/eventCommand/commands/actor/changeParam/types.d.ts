import { EventCommandLike2 } from '../../../frame';
export interface Command_ChangeParam extends EventCommandLike2<317> {
    parameters: ParamArray_ChangeParam;
}
export type ParamArray_ChangeParam = [
    actorId: number,
    paramId: number,
    operation: number,
    value: number
];
