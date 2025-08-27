import { Command_ChangeArmors, ParamArray_ChangeArmors, ParamObject_ChangeArmors, ParamObject_GainArmor, ParamObject_GainArmorV } from './types/armor';
export declare const makeCommandChangeArmors: (param: ParamObject_ChangeArmors, indent?: number) => Command_ChangeArmors;
export declare const fromArrayChangeArmors: (arr: ParamArray_ChangeArmors) => ParamObject_ChangeArmors;
export declare const makeCommandGainArmor: (param: ParamObject_GainArmor, indent?: number) => Command_ChangeArmors;
export declare const makeCommandGainArmorV: (param: ParamObject_GainArmorV, indent?: number) => Command_ChangeArmors;
export declare const makeCommandLoseArmor: (param: ParamObject_GainArmor, indent?: number) => Command_ChangeArmors;
export declare const makeCommandLoseArmorV: (param: ParamObject_GainArmorV, indent?: number) => Command_ChangeArmors;
