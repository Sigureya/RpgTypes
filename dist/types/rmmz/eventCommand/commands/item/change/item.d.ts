import { Command_ChangeItems, ParamArray_ChangeItems, ParamObject_ChangeItemsFullset, ParamObject_ChangeItems, ParamObject_ChangeItemsV } from './types/item';
export declare const fromArrayChangeItems: (arr: ParamArray_ChangeItems) => ParamObject_ChangeItemsFullset;
export declare const makeCommandChangeItems: (param: ParamObject_ChangeItemsFullset, indent?: number) => Command_ChangeItems;
export declare const makeCommandGainItem: (param: ParamObject_ChangeItems, indent?: number) => Command_ChangeItems;
export declare const makeCommandGainItemV: (param: ParamObject_ChangeItemsV, indent?: number) => Command_ChangeItems;
export declare const makeCommandLoseItem: (param: ParamObject_ChangeItems, indent?: number) => Command_ChangeItems;
export declare const makeCommandLoseItemV: (param: ParamObject_ChangeItemsV, indent?: number) => Command_ChangeItems;
