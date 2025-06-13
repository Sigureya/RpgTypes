import { Command_CommonEvent, ParamObject_CommonEvent, ParamArray_CommonEvent } from './types';
export declare const makeCommandCommonEvent: (param: Partial<ParamObject_CommonEvent> | undefined, indent?: number) => Command_CommonEvent;
export declare const fromArrayCommonEvent: (array: ParamArray_CommonEvent) => ParamObject_CommonEvent;
export declare const toArrayCommonEvent: (object: Partial<ParamObject_CommonEvent>) => ParamArray_CommonEvent;
