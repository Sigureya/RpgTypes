import { EventCommandLike } from '../../../frame';
import { RECOVER_ALL } from '../../../../rpg';
export interface Command_RecoverAll extends EventCommandLike<typeof RECOVER_ALL> {
    parameters: ParamArray_RecoverAll;
}
export type ParamArray_RecoverAll = [];
