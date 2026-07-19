export interface ActionResultBase {
  missed: boolean;
  evaded: boolean;
  code: number;
}

export interface ActionResult_Damage extends ActionResultBase {
  code: typeof ACTION_HP_DAMAGE;
  hpDamage: number;
}

export interface ActionResult_AddActorVariable extends ActionResultBase {
  code: typeof ACTION_ADD_ACTOR_VARIABLE;
  key: string;
  value: number;
}

export const ACTION_HP_DAMAGE = 1 as const;

export const ACTION_ADD_ACTOR_VARIABLE = 101 as const;

export interface BattlerInstance<T> {
  hp: number;
  mp: number;
  tp: number;
  variables: T;
}

const dealHpDamage = <T>(
  battler: BattlerInstance<T>,
  damage: number,
): BattlerInstance<T> => {
  return {
    hp: Math.max(battler.hp - damage, 0),
    mp: battler.mp,
    tp: battler.tp,
    variables: battler.variables,
  };
};
