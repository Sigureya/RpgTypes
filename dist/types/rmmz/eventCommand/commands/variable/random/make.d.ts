import { Command_ControlVariables_FromRandom, ParamArray_VariableFromRandom, ParamObject_VariableFromRandom } from './types';
export declare const variableFromRandom: (params: ParamArray_VariableFromRandom, randomFn: (min: number, max: number) => number) => number;
export declare const makeCommandVariableFromRandom: (params: ParamObject_VariableFromRandom, indent?: number) => Command_ControlVariables_FromRandom;
