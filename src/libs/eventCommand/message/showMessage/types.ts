import type { EventCommandLike2 } from "@RpgTypes/eventCommand/frame";

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

export interface Command2_ShowMessage extends EventCommandLike2<101> {
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
