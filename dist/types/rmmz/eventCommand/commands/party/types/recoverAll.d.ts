import { EventCommandLike2 } from '../../../frame';
import { RECOVER_ALL } from '../../../../rpg';
export interface Command_RecoverAll extends EventCommandLike2<typeof RECOVER_ALL> {
    parameters: ParamArray_RecoverAll;
}
export type ParamArray_RecoverAll = [];
