import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand";

export type ParamArray_ShowMessage = [
  facename: string,
  faceIndex: number,
  background: number,
  positionType: number,
  speakerName: string | undefined
];

export interface ParamObject_ShowMessage {
  facename: string;
  faceIndex: number;
  background: number;
  positionType: number;
  speakerName: string;
}

export interface Command_ShowMessageHeader extends EventCommandLike<101> {
  parameters: ParamArray_ShowMessage;
}

/**
 * @deprecated Use Command2_ShowMessage instead.
 */
export interface Command2_ShowMessage_MV extends EventCommandLike<101> {
  parameters: [
    facename: string,
    faceIndex: number,
    background: number,
    positionType: number
  ];
}

export interface Command_ShowMessageBody
  extends EventCommandLike<401, [string]> {
  parameters: [text: string];
}
