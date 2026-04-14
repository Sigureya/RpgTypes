import { EventCommandLike, SCRIPT_EVAL } from '../../../../../libs/eventCommand';
export type ParamArray_VariableScript = [expr: string];
export interface Command_VariableScript extends EventCommandLike<typeof SCRIPT_EVAL, ParamArray_VariableScript> {
    code: typeof SCRIPT_EVAL;
    indent: number;
    parameters: ParamArray_VariableScript;
}
