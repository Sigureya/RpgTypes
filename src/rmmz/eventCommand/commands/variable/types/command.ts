import type {
  CONTROL_VARIABLES,
  EventCommandLike,
} from "@RpgTypes/libs/eventCommand";
import type { ParamArray_ControlVariables } from "./paramArray";

export interface Command_ControlVariables<
  Param extends ParamArray_ControlVariables = ParamArray_ControlVariables,
> extends EventCommandLike<typeof CONTROL_VARIABLES> {
  parameters: Param;
}
