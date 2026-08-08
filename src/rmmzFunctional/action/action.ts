import type {
  Trait_AttackState,
  Data_Skill,
  ItemEffect,
} from "@RpgTypes/rmmz/rpg";
import {
  actionItemEffectAttackStates,
  Data_UsableItem,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Battler } from "@RpgTypes/rmmzRuntime";
import type { Provider_Battlers } from "./target";
import { actionMakeTargets } from "./target";

const runAction = (
  item: Data_Skill,
  targetIndex: number,
  subject: Rmmz_Battler,
  provider: Provider_Battlers<Rmmz_Battler>,
  randomFn: () => number,
) => {
  const subjectTratis = subject.allTraits();
  const targets = actionMakeTargets(
    item,
    false,
    subject,
    targetIndex,
    provider,
    randomFn,
  );
  if (targets.length === 0) {
    return;
  }
  const attackStates: Trait_AttackState[] = actionItemEffectAttackStates(
    item.effects,
    subjectTratis,
  );
};

interface ActionResult2 {
  damage: number;
  missed: boolean;
  evaded: boolean;
  critical: boolean;
  effects: ItemEffect[];
}

interface Result2 {
  drain: boolean;
}
