import type { CONTROL_VARIABLES, EventCommandLike } from "@RpgTypes/libs";
import type { ParamArray_VariableFromItem } from "./item";
import type { ParamArray_VariableFromWeapon } from "./weapon";
import type { ParamArray_VariableFromArmor } from "./armor";

export interface Command_ControlVariables_FromAnyGoods extends EventCommandLike<
  typeof CONTROL_VARIABLES,
  | ParamArray_VariableFromItem
  | ParamArray_VariableFromWeapon
  | ParamArray_VariableFromArmor
> {}
