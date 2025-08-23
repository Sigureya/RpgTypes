import { Command_ChangeWeapons2, ParamArray_ChangeWeapons2, ParamObject_ChangeWeaponsFullset, ParamObject_ChangeWeapons, ParamObject_ChangeWeaponsV } from './types/weapon';
export declare const fromArrayChangeWeapons: (arr: ParamArray_ChangeWeapons2) => ParamObject_ChangeWeaponsFullset;
export declare const makeCommandChangeWeapons: (param: ParamObject_ChangeWeaponsFullset, indent?: number) => Command_ChangeWeapons2;
export declare const makeCommandGainWeapon: (param: ParamObject_ChangeWeapons, indent?: number) => Command_ChangeWeapons2;
export declare const makeCommandGainWeaponV: (param: ParamObject_ChangeWeaponsV, indent?: number) => Command_ChangeWeapons2;
export declare const makeCommandLoseWeapon: (param: ParamObject_ChangeWeapons, indent?: number) => Command_ChangeWeapons2;
export declare const makeCommandLoseWeaponV: (param: ParamObject_ChangeWeaponsV, indent?: number) => Command_ChangeWeapons2;
