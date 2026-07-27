import type { Command_BattleProcessing } from "@RpgTypes/rmmz/eventCommand";
import type { Data_Map, Data_Troop } from "@RpgTypes/rmmz/events";
import { selectMapEncounters } from "@RpgTypes/rmmz/rpg/data/event/map/map";
import type {
  Rmmz_Party,
  Rmmz_PlayerCharactor,
  Rmmz_Variables,
} from "@RpgTypes/rmmzRuntime";
import type { Rmmz_BattleManager } from "@RpgTypes/rmmzRuntime/managers/battle";

interface Provide_Encounter {
  random(maxWeight: number): number;
  dataTroop(troopId: number): Data_Troop | undefined;
}

const xxx = (
  command: Command_BattleProcessing,
  party: Rmmz_Party,
  player: Rmmz_PlayerCharactor,
  variables: Rmmz_Variables,
  map: Data_Map,
  provided: Provide_Encounter,
  battleManager: Rmmz_BattleManager,
) => {
  if (party.inBattle()) {
    return true;
  }
  const troopId = ggTroopId(
    command,
    variables,
    player,
    map,
    (maxWeight: number) => {
      return provided.random(maxWeight);
    },
  );
  if (troopId === undefined) {
    return true;
  }
  const troop = provided.dataTroop(troopId);
  if (!troop) {
    return true;
  }
  battleManager.setup(troopId, command.parameters[2], command.parameters[3]);
  battleManager.setEventCallback(() => {});
  player.makeEncounterCount();
  return true;
};

export const ggTroopId = (
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
