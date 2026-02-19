import { ParamObject_ChangeExp, Command_ChangeExp, ParamObject_ChangeExpFromVariable } from './types';
export declare const makeCommandGainExp: (param: ParamObject_ChangeExp, indent?: number) => Command_ChangeExp;
export declare const makeCommandLoseExp: (param: ParamObject_ChangeExp, indent?: number) => Command_ChangeExp;
export declare const makeCommandGainExpVariable: (param: ParamObject_ChangeExpFromVariable, indent?: number) => Command_ChangeExp;
export declare const makeCommandLoseExpVariable: (param: ParamObject_ChangeExpFromVariable, indent?: number) => Command_ChangeExp;
