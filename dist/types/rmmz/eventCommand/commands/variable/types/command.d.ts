import { CONTROL_VARIABLES, EventCommandLike } from '../../../../../libs/eventCommand';
import { ParamArray_ControlVariables } from './paramArray';
export interface Command_ControlVariables<Param extends ParamArray_ControlVariables = ParamArray_ControlVariables> extends EventCommandLike<typeof CONTROL_VARIABLES> {
    parameters: Param;
}
