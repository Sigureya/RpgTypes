import { Command_ChangeArmors2, ParamArray_ChangeArmors2, ParamObject_ChangeArmors2, ParamObject_GainArmor, ParamObject_GainArmorV } from './types/armor';
export declare const makeCommandChangeArmors: (param: ParamObject_ChangeArmors2, indent?: number) => Command_ChangeArmors2;
export declare const fromArrayChangeArmors: (arr: ParamArray_ChangeArmors2) => ParamObject_ChangeArmors2;
export declare const makeCommandGainArmor: (param: ParamObject_GainArmor, indent?: number) => Command_ChangeArmors2;
export declare const makeCommandGainArmorV: (param: ParamObject_GainArmorV, indent?: number) => Command_ChangeArmors2;
export declare const makeCommandLoseArmor: (param: ParamObject_GainArmor, indent?: number) => Command_ChangeArmors2;
export declare const makeCommandLoseArmorV: (param: ParamObject_GainArmorV, indent?: number) => Command_ChangeArmors2;
