import type { Troop_EventConditions } from "@RpgTypes/rmmz";
import type {
  Rmmz_ActorsReadonly,
  Rmmz_BattlerContainer_Readonly,
  Rmmz_TroopTurn,
} from "@RpgTypes/rmmzRuntime";
import type { Rmmz_BattleManager_State } from "@RpgTypes/rmmzRuntime/managers/battle/interface";
import type { Rmmz_BattlerBase_Values } from "@RpgTypes/rmmzRuntime/objects/core/battle/battler/base/values";
import type { Rmmz_Switches } from "@RpgTypes/rmmzRuntime/objects/core/variables";

export const meetsBattleEventConditions = (
  conditions: Troop_EventConditions,
  battleState: Rmmz_BattleManager_State,
  actors: Rmmz_ActorsReadonly<Rmmz_BattlerBase_Values>,
  switches: Rmmz_Switches,
  troop: Rmmz_TroopTurn &
    Rmmz_BattlerContainer_Readonly<Rmmz_BattlerBase_Values>,
): boolean => {
  if (isEmptyConditions(conditions)) {
    return false;
  }
  if (conditions.turnEnding && !battleState.isTurnEnd()) {
    return false;
  }
  if (conditions.turnValid) {
    if (!turnEx(conditions, troop)) {
      return false;
    }
    return false;
  }
  if (conditions.enemyValid) {
    if (!enemyEx(conditions, troop)) {
      return false;
    }
  }
  if (conditions.actorValid) {
    if (!actorEx(conditions, actors)) {
      return false;
    }
  }

  if (conditions.switchValid) {
    if (!switches.value(conditions.switchId)) {
      return false;
    }
  }

  return true;
};

const isEmptyConditions = (conditions: Troop_EventConditions): boolean => {
  return (
    !conditions.turnEnding &&
    !conditions.turnValid &&
    !conditions.enemyValid &&
    !conditions.actorValid &&
    !conditions.switchValid
  );
};

const turnEx = (
  conditions: Troop_EventConditions,
  troop: Rmmz_TroopTurn,
): boolean => {
  const n = troop.turnCount();
  const a = conditions.turnA;
  const b = conditions.turnB;
  if (b === 0 && n !== a) {
    return false;
  }
  if (b > 0 && (n < 1 || n < a || n % b !== a % b)) {
    return false;
  }
  return true;
};

const enemyEx = (
  conditions: Troop_EventConditions,
  troop: Rmmz_BattlerContainer_Readonly<Rmmz_BattlerBase_Values>,
): boolean => {
  const enemy = troop.members()[conditions.enemyIndex];
  if (!enemy) {
    return false;
  }
  if (enemy.hpRate() * 100 > conditions.enemyHp) {
    return false;
  }
  return true;
};

const actorEx = (
  conditions: Troop_EventConditions,
  actors: Rmmz_ActorsReadonly<Rmmz_BattlerBase_Values>,
): boolean => {
  const actor = actors.actor(conditions.actorId);
  if (!actor) {
    return false;
  }
  if (actor.hpRate() * 100 > conditions.actorHp) {
    return false;
  }
  return true;
};
