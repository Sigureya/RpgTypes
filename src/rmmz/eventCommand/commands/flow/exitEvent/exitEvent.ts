import type { Command_ExitEventProcessing } from "./types";

export const makeCommandExitEventProcessing = (
  indent: number = 0
): Command_ExitEventProcessing => ({
  code: 115,
  parameters: [],
  indent,
});
