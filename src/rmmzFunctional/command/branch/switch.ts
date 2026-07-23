import type {
  Command_BranchBySelfSwitch,
  Command_BranchBySwitch,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_SelfSwitches, Rmmz_Switches } from "@RpgTypes/rmmzRuntime";

export const evaluteSwitchBranch = (
  command: Command_BranchBySwitch,
  switches: Rmmz_Switches,
): boolean => {
  const value = switches.value(command.parameters[1]);
  return value === (command.parameters[2] === 0);
};

export const evaluteSetSwitchBranch = (
  command: Command_BranchBySelfSwitch,
  switches: Rmmz_SelfSwitches,
  eventId: number,
): boolean => {
  const key: [number, number, string] = [
    eventId,
    eventId,
    command.parameters[1],
  ];
  const value: boolean = switches.value(key);
  return value === (command.parameters[2] === 0);
};
