import { MakeOtherParam } from './otherTypes';
import { ParamObject_WritingTarget, ParamObject_Operand_Enemy, Command_ControlVariables, Operand_EnemyStatus } from './types';
export declare const toArrayOperandEnemyStatus: (target: ParamObject_WritingTarget, value: ParamObject_Operand_Enemy, operation?: number) => Operand_EnemyStatus;
export declare const makeCommandVariableFromEnemyData: (target: ParamObject_WritingTarget, value: ParamObject_Operand_Enemy, other?: MakeOtherParam) => Command_ControlVariables<Operand_EnemyStatus>;
