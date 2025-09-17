import type {
  Command_FadeOutBGM,
  Command_SaveBGM,
  Command_ResumeBGM,
  Command_FadeOutBGS,
} from "./types";

export const makeCommandFadeOutBGM = (
  param: { duration: number },
  indent: number = 0
): Command_FadeOutBGM => ({
  code: 242,
  indent,
  parameters: [param.duration],
});

export const makeCommandSaveBGM = (indent: number = 0): Command_SaveBGM => ({
  code: 243,
  indent,
  parameters: [],
});

export const makeCommandResumeBGM = (
  indent: number = 0
): Command_ResumeBGM => ({
  code: 244,
  indent,
  parameters: [],
});

export const makeCommandFadeOutBGS = (
  param: { duration: number },
  indent: number = 0
): Command_FadeOutBGS => ({
  code: 246,
  indent,
  parameters: [param.duration],
});
