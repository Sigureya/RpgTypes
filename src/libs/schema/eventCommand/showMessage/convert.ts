import type { Converter } from "@RpgTypes/schema/eventCommand/frame";
import type { ParamArray_ShowMessage, ParamObject_ShowMessage } from "./types";
import { SHOW_MESSAGE } from "./schema";

export const ShowMssageConverter = {
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
    return {
      code: SHOW_MESSAGE,
      indent: indent,
      parameters: [
        param?.facename ?? "",
        param?.faceIndex ?? 0,
        param?.background ?? 0,
        param?.positionType ?? 2,
        param?.speakerName ?? "",
      ],
    };
  },
} as const satisfies Converter<ParamObject_ShowMessage, ParamArray_ShowMessage>;
