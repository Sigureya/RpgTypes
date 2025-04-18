import { describe, expect, test } from "vitest";

import type {
  CollapsOptionLabels,
  Data_NamedItem,
  ExtraParamLabels,
  PartyAbilityOptionLabels,
  SpecialParamLabels,
  GlobalLabel,
  RegularParamLabels,
} from "@sigureya/rpgtypes";
import {
  COLLAPS_NORMAL,
  COLLAPS_BOSS,
  COLLAPS_INSTANT,
  COLLAPS_NONE,
  PARTY_ABILITY_CANCEL_SURPRISE,
  PARTY_ABILITY_DROP_ITEM_DOUBLE,
  PARTY_ABILITY_ENCOUNTER_HALF,
  PARTY_ABILITY_ENCOUNTER_NONE,
  PARTY_ABILITY_GOLD_DOUBLE,
  PARTY_ABILITY_RAISE_PREEMPTIVE,
  EXTRA_PARAM_TRG,
  EXTRA_PARAM_CEV,
  EXTRA_PARAM_CNT,
  EXTRA_PARAM_CRI,
  EXTRA_PARAM_EVA,
  EXTRA_PARAM_HIT,
  EXTRA_PARAM_HRG,
  EXTRA_PARAM_MEV,
  EXTRA_PARAM_MRF,
  EXTRA_PARAM_MRG,
  SPECIAL_PARAM_EXR,
  SPECIAL_PARAM_FDR,
  SPECIAL_PARAM_GRD,
  SPECIAL_PARAM_MCR,
  SPECIAL_PARAM_MDR,
  SPECIAL_PARAM_PDR,
  SPECIAL_PARAM_PHA,
  SPECIAL_PARAM_REC,
  SPECIAL_PARAM_TCR,
  SPECIAL_PARAM_TGR,
  REGULAR_PARAM_ATK,
  REGULAR_PARAM_MAX_HP,
  REGULAR_PARAM_MAX_MP,
  REGULAR_PARAM_DEF,
  REGULAR_PARAM_MATK,
  REGULAR_PARAM_MDEF,
  REGULAR_PARAM_AGI,
  REGULAR_PARAM_LUK,
} from "@sigureya/rpgtypes";
import {
  foldCollapsOptions,
  foldPartyAbilityOptions,
  foldSpecialParams,
  foldExtraParam,
  foldRegularParam,
} from "./makeOptions";

const testSorted = (name: string, list: Data_NamedItem[]) => {
  const sortedList = [...list].sort((a, b) => a.id - b.id);
  test(`${name} should be sorted by id`, () => {
    expect(list).toEqual(sortedList);
  });
};

describe("foldCollapsOptions", () => {
  const options: CollapsOptionLabels = {
    bossCollaps: "Boss Collapse",
    instantCollaps: "Instant Collapse",
    noneCollaps: "No Collapse",
  };
  const global: Pick<GlobalLabel, "normal"> = {
    normal: "Normal Collapse",
  };

  const result = foldCollapsOptions(options, global);
  test("should return correct collaps options", () => {
    const expected: Data_NamedItem[] = [
      { id: COLLAPS_NORMAL, name: "Normal Collapse" },
      { id: COLLAPS_BOSS, name: "Boss Collapse" },
      { id: COLLAPS_INSTANT, name: "Instant Collapse" },
      { id: COLLAPS_NONE, name: "No Collapse" },
    ];

    expect(result).toEqual(expected);
  });
  testSorted("collaps", result);
});

describe("foldPartyAbilityOptions", () => {
  const options: PartyAbilityOptionLabels = {
    encounterHalf: "Half Encounters",
    encounterNone: "No Encounters",
    cancelSurprise: "Cancel Surprise",
    goldDouble: "Double Gold",
    raisePreemptive: "Raise Preemptive",
    dropItemDouble: "Double Item Drops",
  };

  const result = foldPartyAbilityOptions(options);
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
  testSorted("PartyAbility", result);
});

describe("foldRegularParam", () => {
  const param: RegularParamLabels = {
    maxHp: "Max HP",
    maxMp: "Max MP",
    atk: "Attack",
    def: "Defense",
    matk: "Magic Attack",
    mdef: "Magic Defense",
    agi: "Agility",
    luk: "Luck",
  };
  const result = foldRegularParam(param);
  test("should return correct regular parameter options", () => {
    const expected: Data_NamedItem[] = [
      { id: REGULAR_PARAM_MAX_HP, name: "Max HP" },
      { id: REGULAR_PARAM_MAX_MP, name: "Max MP" },
      { id: REGULAR_PARAM_ATK, name: "Attack" },
      { id: REGULAR_PARAM_DEF, name: "Defense" },
      { id: REGULAR_PARAM_MATK, name: "Magic Attack" },
      { id: REGULAR_PARAM_MDEF, name: "Magic Defense" },
      { id: REGULAR_PARAM_AGI, name: "Agility" },
      { id: REGULAR_PARAM_LUK, name: "Luck" },
    ];
    expect(result).toEqual(expected);
  });
  testSorted("RegularParam", result);
});

describe("foldXParam", () => {
  const xparam: ExtraParamLabels = {
    hitRate: "Hit Rate",
    evasionRate: "Evasion Rate",
    criticalRate: "Critical Rate",
    criticalEvasionRate: "Critical Evasion Rate",
    magicEvasionRate: "Magic Evasion Rate",
    magicReflectionRate: "Magic Reflection Rate",
    counterAttackRate: "Counter Attack Rate",
    hpRegenerationRate: "HP Regeneration Rate",
    mpRegenerationRate: "MP Regeneration Rate",
    tpRegenerationRate: "TP Regeneration Rate",
  };

  const result = foldExtraParam(xparam);
  test("should return correct extra parameter options", () => {
    const expected: Data_NamedItem[] = [
      { id: EXTRA_PARAM_HIT, name: "Hit Rate" },
      { id: EXTRA_PARAM_EVA, name: "Evasion Rate" },
      { id: EXTRA_PARAM_CRI, name: "Critical Rate" },
      { id: EXTRA_PARAM_CEV, name: "Critical Evasion Rate" },
      { id: EXTRA_PARAM_MEV, name: "Magic Evasion Rate" },
      { id: EXTRA_PARAM_MRF, name: "Magic Reflection Rate" },
      { id: EXTRA_PARAM_CNT, name: "Counter Attack Rate" },
      { id: EXTRA_PARAM_HRG, name: "HP Regeneration Rate" },
      { id: EXTRA_PARAM_MRG, name: "MP Regeneration Rate" },
      { id: EXTRA_PARAM_TRG, name: "TP Regeneration Rate" },
    ];
    expect(result).toEqual(expected);
  });
  testSorted("XParam", result);
});

describe("foldSpecialParams", () => {
  const specialParams: SpecialParamLabels = {
    targetRate: "Target Rate",
    guradEffectRate: "Guard Effect Rate",
    recoveryEffectRate: "Recovery Effect Rate",
    pharmacology: "Pharmacology",
    mpCostRate: "MP Cost Rate",
    tpChargeRate: "TP Charge Rate",
    physicalDamageRate: "Physical Damage Rate",
    magicDamageRate: "Magic Damage Rate",
    floorDamageRate: "Floor Damage Rate",
    experienceRate: "Experience Rate",
  };

  const result = foldSpecialParams(specialParams);
  test("should return correct special parameter options", () => {
    const expected: Data_NamedItem[] = [
      { id: SPECIAL_PARAM_TGR, name: "Target Rate" },
      { id: SPECIAL_PARAM_GRD, name: "Guard Effect Rate" },
      { id: SPECIAL_PARAM_REC, name: "Recovery Effect Rate" },
      { id: SPECIAL_PARAM_PHA, name: "Pharmacology" },
      { id: SPECIAL_PARAM_MCR, name: "MP Cost Rate" },
      { id: SPECIAL_PARAM_TCR, name: "TP Charge Rate" },
      { id: SPECIAL_PARAM_PDR, name: "Physical Damage Rate" },
      { id: SPECIAL_PARAM_MDR, name: "Magic Damage Rate" },
      { id: SPECIAL_PARAM_FDR, name: "Floor Damage Rate" },
      { id: SPECIAL_PARAM_EXR, name: "Experience Rate" },
    ];

    expect(result).toEqual(expected);
  });
  testSorted("SpecialParam", result);
});
