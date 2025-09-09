import { ParamObject_ChangeArmors, ParamObject_ChangeArmorsV, Command_ChangeArmorsByVariable, Command_ChangeArmorsDirect, Command_ChangeArmors } from './types/armor';
export declare const isUsingVaribleCommandChangingItems: (command: Command_ChangeArmors) => command is Command_ChangeArmorsByVariable;
export declare const makeCommandGainArmor: (param: ParamObject_ChangeArmors, indent?: number) => Command_ChangeArmorsDirect;
export declare const makeCommandGainArmorByVariable: (param: ParamObject_ChangeArmorsV, indent?: number) => Command_ChangeArmorsByVariable;
export declare const makeCommandLoseArmor: (param: ParamObject_ChangeArmors, indent?: number) => Command_ChangeArmorsDirect;
export declare const makeCommandLoseArmorByVariable: (param: ParamObject_ChangeArmorsV, indent?: number) => Command_ChangeArmorsByVariable;
