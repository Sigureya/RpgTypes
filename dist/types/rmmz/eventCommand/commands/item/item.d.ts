import { Command_ChangeItems2, ParamArray_ChangeItems2, ParamObject_ChangeItemsFullset, ParamObject_ChangeItems, ParamObject_ChangeItemsV } from './types/item';
export declare const fromArrayChangeItems: (arr: ParamArray_ChangeItems2) => ParamObject_ChangeItemsFullset;
export declare const makeCommandChangeItems: (param: ParamObject_ChangeItemsFullset, indent?: number) => Command_ChangeItems2;
export declare const makeCommandGainItem: (param: ParamObject_ChangeItems, indent?: number) => Command_ChangeItems2;
export declare const makeCommandGainItemV: (param: ParamObject_ChangeItemsV, indent?: number) => Command_ChangeItems2;
export declare const makeCommandLoseItem: (param: ParamObject_ChangeItems, indent?: number) => Command_ChangeItems2;
export declare const makeCommandLoseItemV: (param: ParamObject_ChangeItemsV, indent?: number) => Command_ChangeItems2;
