import { ParamArray_VariableFromLastData, ParamArray_VariableFromOther } from '../../../../rmmz/eventCommand';
import { Rmmz_MapId, Rmmz_SystemCounter, Rmmz_Temp, Rmmz_Timer, Rmmz_VariableSourceParty } from '../../../../rmmzRuntime';
export declare const variableFromLastData: (params: ParamArray_VariableFromLastData, temp: Rmmz_Temp) => number;
export declare const variableFromOther: (params: ParamArray_VariableFromOther, map: Rmmz_MapId, party: Rmmz_VariableSourceParty, system: Rmmz_SystemCounter, timer: Rmmz_Timer, fallback?: number) => number;
