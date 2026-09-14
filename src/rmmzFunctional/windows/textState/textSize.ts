import type {
  Rmmz_System,
  Rmmz_TextState,
  Rmmz_Window_Base,
} from "@RpgTypes/rmmzRuntime";
import type { Rmts_FontSizeInfo } from "./types";

export const calcTextHeightFromRuntimeObjects = (
  textState: Rmmz_TextState,
  sysmte: Rmmz_System,
  window: Rmmz_Window_Base,
): number => {
  const lineSpacing = window.lineHeight() - sysmte.mainFontSize();
  const info: Rmts_FontSizeInfo = {
    default: sysmte.mainFontSize(),
    max: 96,
    min: 24,
    step: 12,
  };
  return calcTextHeight(textState, info, lineSpacing);
};

export const calcTextHeight = (
  textState: Rmmz_TextState,
  info: Rmts_FontSizeInfo,
  lineSpacing: number,
): number => {
  const lines = textState.text.slice(textState.index).split("\n");
  return calcMaxFontSizeInLineMZ(lines[0], info) + lineSpacing;
};

export const calcMaxFontSizeInLineMZ = (
  lineText: string,
  fontSizeInfo: Rmts_FontSizeInfo,
): number => {
  interface State {
    current: number;
    max: number;
  }

  const state = lineText.matchAll(/\x1b({|}|FS)(?:\[(\d+)])?/gi).reduce(
    (state: State, match): State => {
      const current = calcNextFontSize(state.current, match, fontSizeInfo);
      return {
        current,
        max: Math.max(state.max, current),
      };
    },
    {
      current: fontSizeInfo.default,
      max: fontSizeInfo.default,
    },
  );
  return state.max;
};

const calcNextFontSize = (
  current: number,
  match: RegExpExecArray,
  info: Rmts_FontSizeInfo,
): number => {
  switch (match[1].toUpperCase()) {
    case "{":
      return current <= info.max ? current + info.step : current;
    case "}":
      return current >= info.min ? current - info.step : current;
    case "FS":
      return Number(match[2]);
    default:
      return current;
  }
};
