import type { Command_Loop } from "./types";
import type { Command_LoopBreak } from "./types";

export const makeCommandLoop = (indent: number): Command_Loop => ({
  code: 112,
  parameters: [],
  indent,
});

export const makeCommandLoopBreak = (indent: number): Command_LoopBreak => ({
  code: 113,
  parameters: [],
  indent,
});
