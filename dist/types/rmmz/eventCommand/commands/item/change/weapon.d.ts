import { Command_ChangeWeapons, ParamArray_ChangeWeapons, ParamObject_ChangeWeaponsFullset, ParamObject_ChangeWeapons, ParamObject_ChangeWeaponsV } from './types/weapon';
export declare const fromArrayChangeWeapons: (arr: ParamArray_ChangeWeapons) => ParamObject_ChangeWeaponsFullset;
export declare const makeCommandChangeWeapons: (param: ParamObject_ChangeWeaponsFullset, indent?: number) => Command_ChangeWeapons;
export declare const makeCommandGainWeapon: (param: ParamObject_ChangeWeapons, indent?: number) => Command_ChangeWeapons;
export declare const makeCommandGainWeaponV: (param: ParamObject_ChangeWeaponsV, indent?: number) => Command_ChangeWeapons;
export declare const makeCommandLoseWeapon: (param: ParamObject_ChangeWeapons, indent?: number) => Command_ChangeWeapons;
export declare const makeCommandLoseWeaponV: (param: ParamObject_ChangeWeaponsV, indent?: number) => Command_ChangeWeapons;
