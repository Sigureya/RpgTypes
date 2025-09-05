import type {
  Command_ChangeWeapons,
  Command_InputNumber,
  EventCommand,
} from "@RpgTypes/rmmz";
import { CHANGE_WEAPONS, INPUT_NUMBER } from "@RpgTypes/rmmz";

const xxx = (list: ReadonlyArray<EventCommand>) => {};

const commandInputNumber = (command: Command_InputNumber) => {
  return {
    code: INPUT_NUMBER,
    variableId: command.parameters[0],
    index: 0,
  };
};

const commandGainItem = (command: Command_ChangeWeapons) => {
  //    command.
  return {
    code: CHANGE_WEAPONS,
  };
};
