import { EventCommandLike2 } from '../../../frame';
export interface Command_ChangeClaass extends EventCommandLike2<321> {
    parameters: [actorId: number, classId: number, keepExp: boolean];
}
