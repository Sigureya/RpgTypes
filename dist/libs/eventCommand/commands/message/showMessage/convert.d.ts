import { Command2_ShowMessage, ParamArray_ShowMessage, ParamObject_ShowMessage } from './types';
export declare const makeCommandShowMessage: (param: Partial<ParamObject_ShowMessage> | undefined, indent?: number) => Command2_ShowMessage;
export declare const CommandShowMessage: {
    readonly fromArray: (array: ParamArray_ShowMessage) => {
        facename: string;
        faceIndex: number;
        background: number;
        positionType: number;
        speakerName: string;
    };
    readonly toArray: (object: ParamObject_ShowMessage) => [string, number, number, number, string];
    readonly makeCommand: (param: Partial<ParamObject_ShowMessage> | undefined, indent?: number | undefined) => Command2_ShowMessage;
};
