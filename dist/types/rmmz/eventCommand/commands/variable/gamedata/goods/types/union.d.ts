import { CONTROL_VARIABLES, EventCommandLike } from '../../../../../../../libs';
import { ParamArray_VariableFromItem } from './item';
import { ParamArray_VariableFromWeapon } from './weapon';
import { ParamArray_VariableFromArmor } from './armor';
export interface Command_ControlVariables_FromAnyGoods extends EventCommandLike<typeof CONTROL_VARIABLES, ParamArray_VariableFromItem | ParamArray_VariableFromWeapon | ParamArray_VariableFromArmor> {
}
