import type {
  CONTROL_VARIABLES,
  EventCommandLike,
} from "@RpgTypes/libs/eventCommand";
import type { ParamArray_ControlVariables } from "./paramArray";

/**
 * @deprecated Use Command_ControlVariables_FromConstant, Command_ControlVariables_FromActor, Command_ControlVariables_FromEnemy, Command_ControlVariables_FromSystem instead.
 */
export interface Command_ControlVariables<
  Param extends ParamArray_ControlVariables = ParamArray_ControlVariables,
> extends EventCommandLike<typeof CONTROL_VARIABLES> {
  parameters: Param;
}
