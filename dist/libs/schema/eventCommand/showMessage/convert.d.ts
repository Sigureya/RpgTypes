import { ParamArray_ShowMessage, ParamObject_ShowMessage } from './types';
export declare const ShowMssageConverter: {
    readonly fromArray: (array: ParamArray_ShowMessage) => {
        facename: string;
        faceIndex: number;
        background: number;
        positionType: number;
        speakerName: string;
    };
    readonly toArray: (object: ParamObject_ShowMessage) => [string, number, number, number, string];
    readonly makeCommand: (param: Partial<ParamObject_ShowMessage> | undefined, indent?: number | undefined) => {
        code: 101;
        indent: number;
        parameters: (string | number)[];
    };
};
