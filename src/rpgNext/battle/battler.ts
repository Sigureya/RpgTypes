import {
  calculateHpRegenerate,
  calculateMpRegenerate,
  type Data_State,
  type Provider_RpgData,
  type Trait,
} from "@RpgTypes/rmmz";
import { STATE_REMOVE_TIMING_END_OF_TURN } from "@RpgTypes/rmmz/rpg/data/main/traitContainers/state/constants";
import { calculateBattlerParam } from "./param";
import { resolveBattlerTraits } from "./resolve";
import { xxxx } from "./state/state";
import type { NewState } from "./state/types";
import type { BattlerVariables, BuffItem, NewBattler } from "./types";
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

interface ResultOfOnTurnEnd {
  hpRegen: number;
  mpRegen: number;
  tpRegen: number;
  removedStates: NewState[];
}

interface ResultOfOnTurnEnd2 {
  nextVariables: BattlerVariables;
  log: ResultOfOnTurnEnd;
}

const onActionEndXX = (battler: NewBattler, provider: Provider_RpgData) => {};

export const onTurnEndXX2 = (
  battler: NewBattler,
  provider: Provider_RpgData,
): ResultOfOnTurnEnd2 => {
  const traits: Trait[] = resolveBattlerTraits(battler, provider);
  const params = calculateBattlerParam(battler.baseParams, traits);
  const stateFn = (state: NewState): boolean => {
    const stateData = provider.dataState(state.stateId);
    if (!stateData) {
      return false;
    }
    if (stateData.autoRemovalTiming === STATE_REMOVE_TIMING_END_OF_TURN) {
      return battler.variables.turnCount < state.startTurn + state.turnLimit;
    }
    return true;
  };

  const buffFn = (buff: BuffItem): boolean => {
    return battler.variables.turnCount < buff.startTurn;
  };

  const hpRegen: number = calculateHpRegenerate(traits, params.mhp);
  const mpRegen: number = calculateMpRegenerate(traits, params.mmp);
  const tpRegen: number = calculateHpRegenerate(traits, 100);

  const log: ResultOfOnTurnEnd = {
    hpRegen,
    mpRegen,
    tpRegen,
    removedStates: battler.variables.states.filter((state) => {
      return !stateFn(state);
    }),
  };

  const nextBattlerVariables: BattlerVariables = {
    custom: battler.variables.custom,
    hp: battler.variables.hp + hpRegen,
    mp: battler.variables.mp + mpRegen,
    tp: battler.variables.tp + tpRegen,
    turnCount: battler.variables.turnCount + 1,
    states: battler.variables.states.filter(stateFn),
    buffPlus: battler.variables.buffPlus.filter(buffFn),
    buffRate: battler.variables.buffRate.filter(buffFn),
  };
  return {
    nextVariables: nextBattlerVariables,
    log,
  };
};
