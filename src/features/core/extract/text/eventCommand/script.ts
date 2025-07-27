import type { EventCommandGroup_Script } from "@RpgTypes/features/core/eventCommand/commandGroup";
import type { TextCommandParameter } from "./types";

export const extractTextParamFromScript = (
  group: EventCommandGroup_Script
): TextCommandParameter => {
  return {
    code: group.header.code,
    paramIndex: 0,
    value: group.getBodyText(),
  };
};
