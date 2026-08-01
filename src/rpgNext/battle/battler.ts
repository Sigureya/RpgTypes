import type { Data_State } from "@RpgTypes/rmmz";
import { STATE_REMOVE_TIMING_END_OF_TURN } from "@RpgTypes/rmmz/rpg/data/main/traitContainers/state/constants";
import { createRemoveStateByTurnEndOperation, xxxx } from "./state/state";
import type { NewState } from "./state/types";
import type { NewBattler } from "./types";
interface Provider {
  stateData: (id: number) => Data_State | undefined;
}

const onDamageXX = (
  battler: NewBattler,
  stateFn: (id: number) => Data_State | undefined,
) => {
  return xxxx(battler.variables.states, stateFn, (data, instance) => {
    return false;
  });
};

const onTurnEndXX = (battler: NewBattler) => {
  const xxx = battler.variables.states
    .filter((state) => {
      return battler.variables.turnCount >= state.startTurn + state.turnLimit;
    })
    .map(createRemoveStateByTurnEndOperation);
};
