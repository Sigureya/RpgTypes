import { Command_ShowMessageHeader, Command2_ShowMessageBody, ParamArray_ShowMessage, ParamObject_ShowMessage } from './types';
export declare const makeCommandShowMessage: (param: Partial<ParamObject_ShowMessage> | undefined, indent?: number) => Command_ShowMessageHeader;
export declare const fromArrayShowMessageHeader: (array: ParamArray_ShowMessage) => ParamObject_ShowMessage;
export declare const makeCommandShowMessageBody: (text: string, indent?: number) => Command2_ShowMessageBody;
export declare const CommandShowMessage: {
    readonly fromArray: (array: ParamArray_ShowMessage) => {
        facename: string;
        faceIndex: number;
        background: number;
        positionType: number;
        speakerName: string;
    };
    readonly toArray: (object: ParamObject_ShowMessage) => [string, number, number, number, string];
    readonly makeCommand: (param: Partial<ParamObject_ShowMessage> | undefined, indent?: number | undefined) => Command_ShowMessageHeader;
};
