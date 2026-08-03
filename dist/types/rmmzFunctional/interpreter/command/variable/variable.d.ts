import { Command_ControlVariables, ParamArray_Variable_FromGameData } from '../../../../rmmz/eventCommand';
import { Rmmz_MapId, Rmmz_SystemCounter, Rmmz_Temp, Rmmz_Timer, Rmmz_Variables, Rmmz_VariableSourceParty } from '../../../../rmmzRuntime';
import { Rmmz_VariableSourceProvider } from './types';
export declare const variableFromCommand: ({ parameters }: Command_ControlVariables, provider: Rmmz_VariableSourceProvider, variables: Rmmz_Variables, temp: Rmmz_Temp, map: Rmmz_MapId, party: Rmmz_VariableSourceParty, system: Rmmz_SystemCounter, timer: Rmmz_Timer, fallback?: number) => number;
export declare const variableFromGameData: (params: ParamArray_Variable_FromGameData, provider: Rmmz_VariableSourceProvider, temp: Rmmz_Temp, map: Rmmz_MapId, party: Rmmz_VariableSourceParty, system: Rmmz_SystemCounter, timer: Rmmz_Timer, fallback?: number) => number;
