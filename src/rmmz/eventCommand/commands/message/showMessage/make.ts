import { SHOW_MESSAGE, SHOW_MESSAGE_BODY } from "@RpgTypes/libs/eventCommand";
import type {
  Command_ShowMessageBody,
  Command_ShowMessageHeader,
  ParamArray_ShowMessage,
  ParamObject_ShowMessage,
} from "./types";

export const makeCommandShowMessage = (
  param: Partial<ParamObject_ShowMessage> | undefined,
  indent: number = 0,
): Command_ShowMessageHeader => ({
  code: SHOW_MESSAGE,
  indent,
  parameters: [
    param?.facename ?? "",
    param?.faceIndex ?? 0,
    param?.background ?? 0,
    param?.positionType ?? 2,
    param?.speakerName ?? "",
  ],
});

export const fromArrayShowMessageHeader = (
  array: ParamArray_ShowMessage,
): ParamObject_ShowMessage => {
  return {
    facename: array[0],
    faceIndex: array[1],
    background: array[2],
    positionType: array[3],
    speakerName: array[4] ?? "",
  };
};

export const toArrayShowMessageHeader = (
  object: ParamObject_ShowMessage,
): ParamArray_ShowMessage => {
  return [
    object.facename,
    object.faceIndex,
    object.background,
    object.positionType,
    object.speakerName,
  ];
};

export const makeCommandShowMessageBody = (
  text: string,
  indent: number = 0,
): Command_ShowMessageBody => ({
  code: SHOW_MESSAGE_BODY,
  indent,
  parameters: [text],
});
