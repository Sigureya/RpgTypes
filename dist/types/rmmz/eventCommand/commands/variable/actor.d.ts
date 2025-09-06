import { ParamObject_WritingTarget, ParamObject_Operand_ActorStatus, Operand_ActorStatus, Command_ControlVariables } from './types';
import { MakeOtherParam } from './types/other';
export declare const toArrayOperandActorStatus: (target: ParamObject_WritingTarget, value: ParamObject_Operand_ActorStatus, operation?: number) => Operand_ActorStatus;
export declare const makeCommandVariableFromActorStatusData: (target: ParamObject_WritingTarget, value: ParamObject_Operand_ActorStatus, other?: MakeOtherParam) => Command_ControlVariables<Operand_ActorStatus>;
