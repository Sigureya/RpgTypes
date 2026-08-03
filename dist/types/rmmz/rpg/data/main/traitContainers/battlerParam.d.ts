import { Data_Class } from './class';
import { Data_Enemy } from './enemy';
import { StatusParamObject, ParamArray } from './members';
import { Trait } from './trait';
export interface ParamCalculationOptions {
    buffRateStep: number;
    baseBuffRate: number;
}
export declare const calculateParamRate: (traits: ReadonlyArray<Trait>) => StatusParamObject;
export declare const calculateClassDataParam: (paramId: number, class_: Data_Class, level: number, traits: ReadonlyArray<Trait>, paramPlus: ParamArray, buffs: ParamArray, option: ParamCalculationOptions) => number;
export declare const classParamBase: (paramId: number, class_: Data_Class, level: number) => number;
export declare const calculateEnemyDataParam: (paramId: number, enemy: Data_Enemy, traits: ReadonlyArray<Trait>, paramPlus: ParamArray, buffs: ParamArray, option: ParamCalculationOptions) => number;
