import type { Command_BattleProcessing } from "@RpgTypes/rmmz/eventCommand";
import type { Data_Map } from "@RpgTypes/rmmz/events";
import { selectMapEncounters } from "@RpgTypes/rmmz/rpg";
import type {
  Rmmz_Variables,
  Rmmz_PlayerCharactor,
} from "@RpgTypes/rmmzRuntime";

export const resolveTroopIdByCommand = (
  { parameters }: Command_BattleProcessing,
  variables: Rmmz_Variables,
  player: Rmmz_PlayerCharactor,
  map: Data_Map,
  random: (maxWeight: number) => number,
): number | undefined => {
  if (parameters[0] === 0) {
    return parameters[1];
  }
  if (parameters[0] === 1) {
    return variables.value(parameters[1]);
  }
  if (parameters[0] === 2) {
    const x = player.x;
    const y = player.y;
    const encounter = selectMapEncounters(map, x, y, random);
    if (encounter) {
      return encounter.troopId;
    }
  }

  return undefined;
};
