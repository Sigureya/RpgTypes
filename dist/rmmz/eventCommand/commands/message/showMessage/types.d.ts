import { EventCommandLike2 } from '../../..';
export type ParamArray_ShowMessage = [
    facename: string,
    faceIndex: number,
    background: number,
    positionType: number,
    speakerName: string
];
export interface ParamObject_ShowMessage {
    facename: string;
    faceIndex: number;
    background: number;
    positionType: number;
    speakerName: string;
}
export interface Command_ShowMessageHeader extends EventCommandLike2<101> {
    parameters: [
        facename: string,
        faceIndex: number,
        background: number,
        positionType: number,
        speakerName: string
    ];
}
/**
 * @deprecated Use Command2_ShowMessage instead.
 */
export interface Command2_ShowMessage_MV extends EventCommandLike2<101> {
    parameters: [
        facename: string,
        faceIndex: number,
        background: number,
        positionType: number
    ];
}
export interface Command_ShowMessageBody extends EventCommandLike2<401, [string]> {
    parameters: [text: string];
}
