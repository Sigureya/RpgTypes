import type { Command_ControlVariables } from "@RpgTypes/rmmz/eventCommand";
import type {
  Rmmz_MapId,
  Rmmz_SystemCounter,
  Rmmz_Temp,
  Rmmz_Timer,
} from "@RpgTypes/rmmzRuntime";
import {
  variableFromActor,
  variableFromEnemy,
  variableFromMapCharactor,
} from "./battler";
import { variableFromLastData, variableFromOther } from "./other";
import {
  variableFromItem,
  variableFromArmor,
  variableFromWeapon,
} from "./party";
import type {
  Rmmz_VariabeSourceParty,
  Rmmz_VariableSourceProvider,
} from "./types";

export const variableFromCommand = (
  command: Command_ControlVariables,
  provider: Rmmz_VariableSourceProvider,
  temp: Rmmz_Temp,
  map: Rmmz_MapId,
  party: Rmmz_VariabeSourceParty,
  system: Rmmz_SystemCounter,
  timer: Rmmz_Timer,
  fallback: number = 0,
): number => {
  const params = command.parameters;
  if (params[3] === 3) {
    if (params[4] === 3) {
      return variableFromActor(params, fallback, provider);
    }
    if (params[4] === 7) {
      return variableFromOther(params, map, party, system, timer, fallback);
    }
    if (params[4] === 5) {
      return variableFromMapCharactor(params, fallback, provider);
    }
    if (params[4] === 4) {
      return variableFromEnemy(params, fallback, provider);
    }
    if (params[4] === 0) {
      return variableFromItem(params, party, provider);
    }
    if (params[4] === 1) {
      return variableFromWeapon(params, party, provider);
    }
    if (params[4] === 2) {
      return variableFromArmor(params, party, provider);
    }
    if (params[4] === 8) {
      return variableFromLastData(params, temp);
    }
  }
  return fallback;
};
