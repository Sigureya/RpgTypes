import type { Command_ShowAnimation, ParamObject_ShowAnimation } from "./types";

export const makeCommandShowAnimation = (
  param: Partial<ParamObject_ShowAnimation> = {},
  indent: number = 0,
): Command_ShowAnimation => {
  return {
    code: 212,
    indent: indent,
    parameters: [
      param.characterId ?? 0,
      param.animationId ?? 0,
      param.waiting ?? false,
    ],
  };
};
