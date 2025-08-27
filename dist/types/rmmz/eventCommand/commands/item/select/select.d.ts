import { ParamObject_SelectItem, Command_SelectItem, ParamArray_SelectItem } from './types';
export declare const makeCommandSelectItem: (params: ParamObject_SelectItem, indent?: number) => Command_SelectItem;
export declare const fromArraySelectItem: (arr: ParamArray_SelectItem) => ParamObject_SelectItem;
