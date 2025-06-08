import { describe, test, expect } from "vitest";
import { defineTraitSources } from "./formatTraits";
import type { Data_NamedItem, NamedItemSource } from "src/namedItemSource";
import { LABEL_SET_DATA } from "./defaultDataLabels";
import { LABEL_SET_TRAIT } from "./traitContainers/trait";

test("", () => {
  expect(LABEL_SET_DATA).toBeDefined();
  expect(LABEL_SET_TRAIT).toBeDefined();
});
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
// describe("defineTraitSources", () => {
//   const result = defineTraitSources(
//     {
//       skills: [],
//       states: [],
//     },
//     LABEL_SET_DATA,
//     LABEL_SET_TRAIT.options,
//     { normal: "Normal" }
//   );
//   describe("", () => {
//     const set = new Set<string>([
//       LABEL_SET_DATA.skill.domainName,
//       LABEL_SET_DATA.state.domainName,
//       LABEL_SET_TRAIT.options.regularParam.domainName,
//       LABEL_SET_TRAIT.options.extraParam.domainName,
//       LABEL_SET_TRAIT.options.specialParam.domainName,
//       LABEL_SET_TRAIT.options.collaps.domainName,
//       LABEL_SET_TRAIT.options.specialFlag.domainName,
//     ]);
//     test.each(result)("", (item) => {
//       expect(item).toSatisfy((i: NamedItemSource) => set.has(i.label));
//     });
//   });
// });

test("", () => {
  expect(true).toBe(true);
});
