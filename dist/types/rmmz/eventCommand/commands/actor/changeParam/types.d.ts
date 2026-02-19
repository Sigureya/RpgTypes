import { EventCommandLike } from '../../../../../libs/eventCommand';
export interface Command_ChangeParam extends EventCommandLike<317> {
    parameters: ParamArray_ChangeParam;
}
export type ParamArray_ChangeParam = [
    actorId: number,
    paramId: number,
    operation: number,
    value: number
];
