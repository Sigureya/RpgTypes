import { ParamObject_WritingTarget, ParamObject_Operand_WeaponData, Command_ControlVariables, Operand_WeaponData } from './types';
export declare const toArrayOperandWeaponData: (target: ParamObject_WritingTarget, value: ParamObject_Operand_WeaponData, operation?: number) => Operand_WeaponData;
export declare const makeCommandVariableFromWeapon: (target: ParamObject_WritingTarget, value: ParamObject_Operand_WeaponData) => Command_ControlVariables<Operand_WeaponData>;
