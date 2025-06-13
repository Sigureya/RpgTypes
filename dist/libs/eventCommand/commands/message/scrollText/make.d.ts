import { Command_ScrollTextBody, Command_ScrollTextHeader, ParamArray_ScrollTextHeader, ParamObject_ScrollTextHeader, ParamArray_ScrollTextBody, ParamObject_ScrollTextBody } from './types';
export declare const toArrayScrollingTextHeader: (param?: Partial<ParamObject_ScrollTextHeader>) => ParamArray_ScrollTextHeader;
export declare const fromArrayScrollingTextHeader: (array: ParamArray_ScrollTextHeader) => ParamObject_ScrollTextHeader;
export declare const makeCommandScrollingTextHeader: (param?: Partial<ParamObject_ScrollTextHeader>, indent?: number) => Command_ScrollTextHeader;
export declare const toArrayScrollingTextBody: (text?: string) => ParamArray_ScrollTextBody;
export declare const fromArrayScrollingTextBody: (array: ParamArray_ScrollTextBody) => ParamObject_ScrollTextBody;
export declare const makeCommandScrollingTextBody: (text?: string, indent?: number) => Command_ScrollTextBody;
