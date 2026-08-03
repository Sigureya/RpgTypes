import { ParamObject_VariableFromPartyAt, Command_ControlVariables_FromPartyAt, ParamObject_VariableFromOther, Command_ControlVariables_FromOthre } from './types';
export declare const makeCommandVariableFromPartyAt: (params: ParamObject_VariableFromPartyAt, indent?: number) => Command_ControlVariables_FromPartyAt;
export declare const makeCommandVariableFromMapId: (params: ParamObject_VariableFromOther, indent?: number) => Command_ControlVariables_FromOthre;
export declare const makeCommandVariableFromPartySize: (params: ParamObject_VariableFromOther, indent?: number) => Command_ControlVariables_FromOthre;
export declare const makeCommandVariableFromPartyGold: (params: ParamObject_VariableFromOther, indent?: number) => Command_ControlVariables_FromOthre;
export declare const makeCommandVariableFromPartySteps: (params: ParamObject_VariableFromOther, indent?: number) => Command_ControlVariables_FromOthre;
