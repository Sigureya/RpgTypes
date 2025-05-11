import { Command2_CommonEvent, ParamObject_CommonEvent, ParamArray_CommonEvent } from './types';
export declare const makeCommand2_CommonEvent: (param: Partial<ParamObject_CommonEvent> | undefined, indent?: number) => Command2_CommonEvent;
export declare const fromArrayCommonEvent: (array: ParamArray_CommonEvent) => ParamObject_CommonEvent;
export declare const toArrayCommonEvent: (object: Partial<ParamObject_CommonEvent>) => ParamArray_CommonEvent;
