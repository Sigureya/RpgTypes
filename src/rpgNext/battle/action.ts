import type { Data_Skill, Provider_RpgData, Trait } from "@RpgTypes/rmmz";
import {
  canPaySkillCostBasic,
  isSkillIdSealed,
  isSkillSealed,
} from "@RpgTypes/rmmz";
import type { CustomCost } from "./cost/types";
import { resolveBattlerTraits } from "./resolve";
import type { NewBattler } from "./types";

interface CustomGGG {
  canUse(
    skill: Data_Skill,
    battler: NewBattler,
    provider: Provider_RpgData,
  ): object | undefined;
  aditionalCost(
    skill: Data_Skill,
    battler: NewBattler,
    provider: Provider_RpgData,
  ): CustomCost[];
  traits(skill: Data_Skill, battler: NewBattler): Trait[];
}

const hpCost = (skill: Data_Skill) => {
  return 0;
};
const xxx = (
  skill: Data_Skill,
  battler: NewBattler,
  provider: Provider_RpgData,
  custom: CustomGGG,
) => {
  const traits: Trait[] = resolveBattlerTraits(battler, provider);

  if (isSkillSealed(traits, skill)) {
    return false;
  }

  const customTraits = custom.traits(skill, battler);
  if (isSkillSealed(customTraits, skill)) {
    return false;
  }

  const cux = custom.canUse(skill, battler, provider);
  if (!cux) {
    return false;
  }

  const aditionalCost = custom.aditionalCost(skill, battler, provider);
};
