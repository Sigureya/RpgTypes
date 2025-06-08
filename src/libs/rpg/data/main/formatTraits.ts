// import type {
//   FormatCompiled,
//   FormatLabelResolved,
//   FormatRule,
//   NamedItemSource,
// } from "@RpgTypes/namedItemSource";
// import type {
//   TraitFormat,
//   TraitLabelSet,
//   Trait,
//   Data_State,
//   NormalLabel,
// } from "./traitContainers";
// import {
//   defineTraitCollapseType,
//   defineTraitExtraParam,
//   defineTraitRegularParam,
//   defineTraitSpecialFlag,
//   defineTraitSpecialParam,
//   resolveTraitLabels,
//   stateSourceId,
// } from "./traitContainers";
// import type { Data_Skill } from "./usableItems";
// import { skillSourceId } from "./usableItems";
// import { mergeItemsSource } from "@RpgTypes/namedItemSource";
// import type { DataLabels } from "./dataLabels";

// const RULE: FormatRule<Trait> = {
//   itemMapper: {
//     dataIdKey: "dataId",
//     kindKey: "code",
//     placeHolder: "name",
//   },
// };

// interface Items {
//   skills: Data_Skill[];
//   states: Data_State[];
// }

// export const mergeTraitItemSource = (
//   traitLabels: TraitLabelSet,
//   dataLabels: DataLabels,
//   items: Items,
//   global: NormalLabel
// ): Map<number, FormatCompiled> => {
//   const list: FormatLabelResolved<number>[] = resolveTraitLabels(
//     traitLabels
//   ) satisfies TraitFormat[];
//   return mergeItemsSource(
//     list,
//     [] //  resolveNamedItems(traitLabels, dataLabels, items, global)
//   );
// };

// const resolveNamedItems = (
//   set: TraitLabelSet,
//   labels: DataLabels,
//   items: Items,
//   global: NormalLabel
// ): NamedItemSource[] => {
//   return [
//     defineTraitRegularParam(set.regularParam),
//     defineTraitExtraParam(set.extraParam),
//     defineTraitSpecialParam(set.specialParam),
//     defineTraitCollapseType(set.collaps, global),
//     defineTraitSpecialFlag(set.specialFlag),
//     {
//       source: skillSourceId(),
//       label: labels.skill.domainName,
//       items: items.skills,
//     },
//     {
//       source: stateSourceId(),
//       label: labels.state.domainName,
//       items: items.states,
//     },
//   ];
// };

// const compileTraitRule = (rule: FormatRule<Trait>) => {};
