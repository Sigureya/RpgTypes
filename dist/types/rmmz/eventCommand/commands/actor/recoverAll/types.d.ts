import { EventCommandLike } from '../../../frame';
import { RECOVER_ALL } from '../../../../rpg';
export interface Command_RecoverAll extends EventCommandLike<typeof RECOVER_ALL> {
    parameters: ParamArray_RecoverAll;
}
export interface Command_RecoverAllTargetVariable extends EventCommandLike<typeof RECOVER_ALL> {
    parameters: [RecoverTarget["VARIABLE"], number];
}
export type RecoverTarget = {
    EACH_MEMBER: 0;
    VARIABLE: 1;
};
export type ParamArray_RecoverAll = [
    target: RecoverTarget["EACH_MEMBER"] | RecoverTarget["VARIABLE"],
    variableId: number
];
