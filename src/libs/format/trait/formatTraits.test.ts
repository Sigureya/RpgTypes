import { test, expect, describe } from "vitest";
import { mergeItemsSource } from "@RpgTypes/namedItemSource/format/mergeItemsSource";
import type {
  Data_NamedItem,
  NamedItemSource,
  FormatLabelResolved,
  FormatCompiled,
} from "src/namedItemSource";
import type { TraitFormat } from "src/rpg";
import {
  LABEL_SET_DATA,
  LABEL_SET_TRAIT,
  makeSkillData,
  resolveTraitLabels,
  TRAIT_ELEMENT_RATE,
} from "src/rpg";
import { defineTraitSources } from "./formatTraits";

test("", () => {
  expect(LABEL_SET_DATA).toBeDefined();
  expect(LABEL_SET_TRAIT).toBeDefined();
});

const mockElements: Data_NamedItem[] = [
  {
    id: 1,
    name: "Fire",
  },
  {
    id: 2,
    name: "Ice",
  },
  {
    id: 3,
    name: "Lightning",
  },
];

const mockSkills: Data_NamedItem[] = [
  {
    id: 1,
    name: "Fireball",
  },
  {
    id: 2,
    name: "Ice Spike",
  },
  {
    id: 3,
    name: "Lightning Bolt",
  },
];

const makeSource = (): NamedItemSource[] => {
  return defineTraitSources(
    {
      skills: mockSkills.map((skill) => makeSkillData(skill)),
      states: [],
    },
    LABEL_SET_DATA,
    LABEL_SET_TRAIT.options,
    { normal: "Normal" }
  );
};

describe("defineTraitSources", () => {
  const result = makeSource();
  describe("", () => {
    const set = new Set<string>([
      LABEL_SET_DATA.skill.domainName,
      LABEL_SET_DATA.state.domainName,
      LABEL_SET_TRAIT.options.regularParam.domainName,
      LABEL_SET_TRAIT.options.extraParam.domainName,
      LABEL_SET_TRAIT.options.specialParam.domainName,
      LABEL_SET_TRAIT.options.collaps.domainName,
      LABEL_SET_TRAIT.options.specialFlag.domainName,
    ]);
    test.each(result)("", (sourceItem) => {
      expect(sourceItem).toSatisfy(
        (item: NamedItemSource) =>
          set.has(item.label) && item.source.author === "rmmz"
      );
    });
  });
});

describe("", () => {
  const list: FormatLabelResolved<number>[] = resolveTraitLabels(
    LABEL_SET_TRAIT.options
  ) satisfies TraitFormat[];
  const source: Map<number, FormatCompiled> = mergeItemsSource(
    list,
    makeSource()
  );
  test("", () => {
    expect(source.get(TRAIT_ELEMENT_RATE)).toEqual({
      patternCompiled: LABEL_SET_TRAIT.options.elementRate.format,
      label: LABEL_SET_TRAIT.options.elementRate.domainName,
      data: mockElements,
    } satisfies FormatCompiled);
  });
});
