import { EventCommandLike2 } from '../../../frame';
import { ParamArray_ControlVariables } from './paramArray';
export interface Command_ControlVariables<Param extends ParamArray_ControlVariables = ParamArray_ControlVariables> extends EventCommandLike2<122> {
    parameters: Param;
}
