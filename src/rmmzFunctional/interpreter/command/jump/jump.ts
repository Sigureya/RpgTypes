import type {
  Command_LabelJump,
  EventCommand,
} from "@RpgTypes/rmmz/eventCommand";
import { LABEL } from "@RpgTypes/rmmz/eventCommand";

export const findJumpTargetIndex = (
  jumpCommand: Command_LabelJump,
  commands: ReadonlyArray<EventCommand>,
): number => {
  const labelName: string = jumpCommand.parameters[0];
  return commands.findIndex(
    (c) => c.code === LABEL && c.parameters[0] === labelName,
  );
};
