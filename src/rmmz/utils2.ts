import type { Command_ShowMessageHeader } from "./eventCommand";

export const resolveSpeakerName = (
  command: Command_ShowMessageHeader,
): string => {
  return command.parameters[4] ?? "";
};
