import { EventCommandLike2 } from '../../../frame';
export interface Command_ChangeClaass extends EventCommandLike2<321> {
    parameters: ParamArray_ChangeClass;
}
export type ParamArray_ChangeClass = [
    actorId: number,
    classId: number,
    keepExp: boolean
];
