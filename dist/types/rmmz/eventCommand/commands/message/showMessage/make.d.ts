import { Command_ShowMessageBody, Command_ShowMessageHeader, ParamArray_ShowMessage, ParamObject_ShowMessage } from './types';
export declare const makeCommandShowMessage: (param: Partial<ParamObject_ShowMessage> | undefined, indent?: number) => Command_ShowMessageHeader;
export declare const fromArrayShowMessageHeader: (array: ParamArray_ShowMessage) => ParamObject_ShowMessage;
export declare const toArrayShowMessageHeader: (object: ParamObject_ShowMessage) => ParamArray_ShowMessage;
export declare const makeCommandShowMessageBody: (text: string, indent?: number) => Command_ShowMessageBody;
