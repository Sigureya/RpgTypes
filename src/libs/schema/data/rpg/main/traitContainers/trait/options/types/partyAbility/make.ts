import {
  PARTY_ABILITY_ENCOUNTER_HALF,
  PARTY_ABILITY_ENCOUNTER_NONE,
  PARTY_ABILITY_CANCEL_SURPRISE,
  PARTY_ABILITY_RAISE_PREEMPTIVE,
  PARTY_ABILITY_GOLD_DOUBLE,
  PARTY_ABILITY_DROP_ITEM_DOUBLE,
} from "./constants";
import type { PartyAbilityOptionLabels } from "./partyAbility";
import type { Data_NamedItem2 } from "@RpgTypes/schema/namedItemSource";

export const foldPartyAbilityOptions = (
  options: PartyAbilityOptionLabels
): Data_NamedItem2[] => {
  return [
    {
      id: PARTY_ABILITY_ENCOUNTER_HALF,
      name: options.encounterHalf,
    },
    {
      id: PARTY_ABILITY_ENCOUNTER_NONE,
      name: options.encounterNone,
    },
    {
      id: PARTY_ABILITY_CANCEL_SURPRISE,
      name: options.cancelSurprise,
    },
    {
      id: PARTY_ABILITY_RAISE_PREEMPTIVE,
      name: options.raisePreemptive,
    },
    {
      id: PARTY_ABILITY_GOLD_DOUBLE,
      name: options.goldDouble,
    },
    {
      id: PARTY_ABILITY_DROP_ITEM_DOUBLE,
      name: options.dropItemDouble,
    },
  ];
};
