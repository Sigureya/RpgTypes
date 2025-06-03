import { describe, expect, test } from "vitest";
import {
  PARTY_ABILITY_ENCOUNTER_HALF,
  PARTY_ABILITY_ENCOUNTER_NONE,
  PARTY_ABILITY_CANCEL_SURPRISE,
  PARTY_ABILITY_RAISE_PREEMPTIVE,
  PARTY_ABILITY_GOLD_DOUBLE,
  PARTY_ABILITY_DROP_ITEM_DOUBLE,
} from "./constants";
import { partyAbilityToArray } from "./partyAbility";
import type { PartyAbilityOptionLabels } from "./labels";
import type { Data_NamedItem } from "src/namedItemSource";

describe("partyAbilityToArray", () => {
  const options: PartyAbilityOptionLabels = {
    encounterHalf: "Half Encounters",
    encounterNone: "No Encounters",
    cancelSurprise: "Cancel Surprise",
    goldDouble: "Double Gold",
    raisePreemptive: "Raise Preemptive",
    dropItemDouble: "Double Item Drops",
  };

  const result = partyAbilityToArray(options);
  test("should return correct party ability options", () => {
    const expected: Data_NamedItem[] = [
      { id: PARTY_ABILITY_ENCOUNTER_HALF, name: "Half Encounters" },
      { id: PARTY_ABILITY_ENCOUNTER_NONE, name: "No Encounters" },
      { id: PARTY_ABILITY_CANCEL_SURPRISE, name: "Cancel Surprise" },
      { id: PARTY_ABILITY_RAISE_PREEMPTIVE, name: "Raise Preemptive" },
      { id: PARTY_ABILITY_GOLD_DOUBLE, name: "Double Gold" },
      { id: PARTY_ABILITY_DROP_ITEM_DOUBLE, name: "Double Item Drops" },
    ];

    expect(result).toEqual(expected);
  });
  test("should be sorted by id", () => {
    const sortedResult = [...result].sort((a, b) => a.id - b.id);
    expect(result).toEqual(sortedResult);
  });
});
