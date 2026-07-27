import type {
  BranchParam_SelfSwitch,
  BranchParam_Switch,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_SelfSwitches, Rmmz_Switches } from "@RpgTypes/rmmzRuntime";

export const evaluteSwitchBranch = (
  parameters: BranchParam_Switch,
  switches: Rmmz_Switches,
): boolean => {
  const value = switches.value(parameters[1]);
  return value === (parameters[2] === 0);
};

export const evaluteSelfSwitchBranch = (
  parameters: BranchParam_SelfSwitch,
  switches: Rmmz_SelfSwitches,
  eventId: number,
): boolean => {
  const key: [number, number, string] = [eventId, eventId, parameters[1]];
  const value: boolean = switches.value(key);
  return value === (parameters[2] === 0);
};
