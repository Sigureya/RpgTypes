import { describe, test, expect } from "vitest";
// import { mergeTraitItemSource } from "./formatTraits";
// import { LABEL_SET_DATA } from "./defaultDataLabels";
// import { makeStateData, TRAIT_STATE_RATE } from "./traitContainers";
// import { LABEL_SET_TRAIT } from "./traitContainers/trait/selectItems/default";
// import { makeSkillData } from "./usableItems";
// import type { Data_NamedItem, FormatCompiled } from "src/namedItemSource";

// interface TestCase {
//   caseName: string;
//   expected: FormatCompiled | undefined;
//   code: number;
// }

// const mockSkills: Data_NamedItem[] = [
//   { id: 1, name: "fireball" },
//   { id: 2, name: "heal" },
//   { id: 3, name: "lightning" },
// ];

// const mockStates: Data_NamedItem[] = [
//   { id: 1, name: "poison" },
//   { id: 2, name: "silence" },
//   { id: 3, name: "sleep" },
// ];

// const mockMap: ReadonlyMap<number, FormatCompiled> = mergeTraitItemSource(
//   LABEL_SET_TRAIT.options,
//   LABEL_SET_DATA,
//   {
//     skills: mockSkills.map((s) => makeSkillData({ id: s.id, name: s.name })),
//     states: mockStates.map((s) => makeStateData({ id: s.id, name: s.name })),
//   },
//   { normal: "normal" }
// );

// const testMapData = ({ caseName, code, expected }: TestCase) => {
//   test(caseName, () => {
//     const item = mockMap.get(code);
//     expect(item).toEqual(expected satisfies typeof item);
//   });
// };

// const runTest = (caseName: string, cases: TestCase[]) => {
//   describe(caseName, () => {
//     cases.forEach((testCase) => {
//       testMapData(testCase);
//     });
//   });
// };
// runTest("", [
//   {
//     caseName: "",
//     code: TRAIT_STATE_RATE,
//     expected: {
//       label: LABEL_SET_TRAIT.options.stateRate.domainName,
//       patternCompiled: LABEL_SET_TRAIT.options.stateRate.format,
//       data: mockStates,
//     },
//   },
// ]);
test("", () => {
  expect(true).toBe(true); // Placeholder for actual tests
});
