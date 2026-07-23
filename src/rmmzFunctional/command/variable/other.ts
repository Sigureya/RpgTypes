import type {
  Command_ControlVariables_FromLastData,
  Command_ControlVariables_FromOthre,
} from "@RpgTypes/rmmz/eventCommand";
import type {
  Rmmz_MapId,
  Rmmz_Party,
  Rmmz_SystemCounter,
  Rmmz_Temp,
  Rmmz_Timer,
} from "@RpgTypes/rmmzRuntime";

export const variableFromLastData = (
  command: Command_ControlVariables_FromLastData,
  temp: Rmmz_Temp,
): number => {
  return temp.lastActionData(command.parameters[5]);
};

export const variableFromOther = (
  command: Command_ControlVariables_FromOthre,
  map: Rmmz_MapId,
  party: Rmmz_Party,
  system: Rmmz_SystemCounter,
  timer: Rmmz_Timer,
  fallback: number = 0,
): number => {
  switch (command.parameters[5]) {
    case 0:
      return map.mapId();

    case 1:
      return party.size();

    case 2:
      return party.gold();

    case 3:
      return party.steps();

    case 4:
      return system.playtime();

    case 5:
      return timer.seconds();

    case 6:
      return system.saveCount();

    case 7:
      return system.battleCount();

    case 8:
      return system.winCount();

    case 9:
      return system.escapeCount();
  }

  return fallback;
};
