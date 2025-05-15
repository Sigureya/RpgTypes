import { Command_ShowScrollingTextBody, Command_ShowScrollingText } from '../../../../schema';
import { ParamArray_ScrollTextHead, ParamObject_ScrollTextHead, ParamArray_ScrollTextBody, ParamObject_ScrollTextBody } from './types';
export declare const toArrayScrollingTextHeader: (param?: Partial<ParamObject_ScrollTextHead>) => ParamArray_ScrollTextHead;
export declare const fromArrayScrollingTextHeader: (array: ParamArray_ScrollTextHead) => ParamObject_ScrollTextHead;
export declare const makeCommandScrollingTextHeader: (param?: Partial<ParamObject_ScrollTextHead>, indent?: number) => Command_ShowScrollingText;
export declare const toArrayScrollingTextBody: (text?: string) => ParamArray_ScrollTextBody;
export declare const fromArrayScrollingTextBody: (array: ParamArray_ScrollTextBody) => ParamObject_ScrollTextBody;
export declare const makeCommandScrollingTextBody: (text?: string, indent?: number) => Command_ShowScrollingTextBody;
