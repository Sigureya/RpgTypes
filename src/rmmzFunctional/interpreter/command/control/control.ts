import type {
  Command_ControlSwitches,
  Command_ControlTimer,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Switches, Rmmz_Timer } from "@RpgTypes/rmmzRuntime";

export const commandControlSwitches = (
  command: Command_ControlSwitches,
  switches: Rmmz_Switches,
): boolean => {
  const startSwitchId = command.parameters[0];
  const endSwitchId = command.parameters[1];
  const isEnabled = command.parameters[2] === 0;

  for (let switchId = startSwitchId; switchId <= endSwitchId; switchId++) {
    switches.setValue(switchId, isEnabled);
  }
  return true;
};

// export const commandControlSelfSwitch = (
//   command: Command_ControlSelfSwitch,
//   selfSwitches: Rmmz_SelfSwitches,
//   mapId: number,
//   eventId: number,
// ): boolean => {
//   if (eventId > 0) {
//     const key = [mapId, eventId, command.parameters[0]] as const;
//     selfSwitches.setValue(key, command.parameters[1] === 0);
//   }
//   return true;
// };

export const commandControlTimer = (
  command: Command_ControlTimer,
  timer: Rmmz_Timer,
): boolean => {
  if (command.parameters[0] === 0) {
    timer.start(command.parameters[1] * 60);
  } else {
    timer.stop();
  }
  return true;
};
