import type { EventCommandLike2 } from "@RpgTypes/eventCommand/frame";
import type { ParamArray_ControlVariables } from "./paramArray";

export interface Command_ControlVariables<
  Param extends ParamArray_ControlVariables = ParamArray_ControlVariables
> extends EventCommandLike2<122> {
  parameters: Param;
}
