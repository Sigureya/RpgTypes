import { EventCommandLike } from '../../..';
import { ParamArray_ControlVariables } from './paramArray';
export interface Command_ControlVariables<Param extends ParamArray_ControlVariables = ParamArray_ControlVariables> extends EventCommandLike<122> {
    parameters: Param;
}
