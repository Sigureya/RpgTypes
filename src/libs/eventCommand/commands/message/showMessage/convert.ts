import type { Converter } from "@RpgTypes/eventCommand/frame";
import type {
  Command_ShowMessageHeader,
  Command2_ShowMessageBody,
  ParamArray_ShowMessage,
  ParamObject_ShowMessage,
} from "./types";
import { SHOW_MESSAGE, SHOW_MESSAGE_BODY } from "@RpgTypes/schema";

export const makeCommandShowMessage = (
  param: Partial<ParamObject_ShowMessage> | undefined,
  indent: number = 0
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

export const makeCommandShowMessageBody = (
  text: string,
  indent: number = 0
): Command2_ShowMessageBody => ({
  code: SHOW_MESSAGE_BODY,
  indent,
  parameters: [text],
});

export const CommandShowMessage = {
  fromArray: (array) => {
    return {
      facename: array[0],
      faceIndex: array[1],
      background: array[2],
      positionType: array[3],
      speakerName: array[4],
    };
  },
  toArray: (object) => {
    return [
      object.facename,
      object.faceIndex,
      object.background,
      object.positionType,
      object.speakerName,
    ];
  },
  makeCommand: (param, indent = 0) => {
    return makeCommandShowMessage(param, indent);
  },
} as const satisfies Converter<ParamObject_ShowMessage, ParamArray_ShowMessage>;
