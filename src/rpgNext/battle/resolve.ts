import type {
  Provider_RpgItems,
  Provider_RpgState,
  Trait,
  Data_Armor,
  Data_State,
  Provider_RpgData,
} from "@RpgTypes/rmmz";
import type { NewBattler, BattlerVariables } from "./types";

export const resolveBattlerTraits = (
  battler: NewBattler,
  provider: Provider_RpgData,
): Trait[] => {
  const armors = resolveBattlerArmors(battler, provider);
  const states = resolveBattlerStates(battler.variables, provider);
  return [
    ...armors.flatMap((armor) => armor.traits),
    ...states.flatMap((state) => state.traits),
  ];
};

export const resolveBattlerArmors = (
  actor: NewBattler,
  provider: Provider_RpgItems,
): Data_Armor[] => {
  return actor.armors
    .map((id: number) => provider.dataArmor(id))
    .filter((armor) => !!armor);
};

export const resolveBattlerStates = (
  battler: BattlerVariables,
  provider: Provider_RpgState,
): Data_State[] => {
  return battler.states
    .map((state) => {
      return provider.dataState(state.stateId);
    })
    .filter((state) => !!state);
};
