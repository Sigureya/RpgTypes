import type { EditorSettings } from "./types";

export const makeEditorSetting = (
  param: Partial<EditorSettings> = {}
): EditorSettings => {
  return {
    jsonFormatLevel: param.jsonFormatLevel ?? 0,
    messageWidth1: param.messageWidth1 ?? 816,
    messageWidth2: param.messageWidth2 ?? 816,
  };
};
