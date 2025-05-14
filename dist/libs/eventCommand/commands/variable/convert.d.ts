import type * as Type from "./types";
export declare const toArrayOperandConstant: (target: Type.ParamObject_WritingTarget, value: Type.ParamObject_Operand_Constant, operation?: number) => Type.Operand_Constatant;
export declare const toArrayOperandVariable: (target: Type.ParamObject_WritingTarget, value: Type.ParamObject_Operand_Variable, operation?: number) => Type.Operand_Variable;
export declare const toArrayOperandRandom: (target: Type.ParamObject_WritingTarget, value: Type.ParamObject_Operand_Random, operation?: number) => Type.Operand_Random;
export declare const toArrayOperandScript: (target: Type.ParamObject_WritingTarget, value: Type.ParamObject_Operand_Script, operation?: number) => Type.Operand_Script;
export declare const toArrayOperandItemData: (target: Type.ParamObject_WritingTarget, value: Type.ParamObject_Operand_ItemData, operation?: number) => Type.Operand_ItemData;
export declare const toArrayOperandActorStatus: (target: Type.ParamObject_WritingTarget, value: Type.ParamObject_Operand_ActorStatus, operation?: number) => Type.Operand_ActorStatus;
export declare const toArrayOperandEnemyStatus: (target: Type.ParamObject_WritingTarget, value: Type.ParamObject_Operand_Enemy, operation?: number) => Type.Operand_EnemyStatus;
