import type {
  FormatCompiled,
  FormatLabelResolved,
  FormatRule,
  NamedItemSource,
} from "@RpgTypes/namedItemSource";
import type {
  TraitFormat,
  TraitLabelSet,
  Trait,
  Data_State,
} from "./traitContainers";
import {
  defineTraitCollapseType,
  defineTraitExtraParam,
  defineTraitRegularParam,
  defineTraitSpecialFlag,
  defineTraitSpecialParam,
  resolveTraitLabels,
  stateSourceId,
} from "./traitContainers";
import type { Data_Skill } from "./usableItems";
import { skillSourceId } from "./usableItems";
import { mergeItemsSource } from "@RpgTypes/namedItemSource/format/mergeItemsSource";
import type { DataLabels } from "./dataLabels";
import type { GlobalLabel } from "@RpgTypes/schema";

const RULE: FormatRule<Trait> = {
  itemMapper: {
    dataIdKey: "dataId",
    kindKey: "code",
    placeHolder: "name",
  },
};

interface Items {
  skills: Data_Skill[];
  states: Data_State[];
}

const tttt = (
  items: Items,
  labels: DataLabels,
  set: TraitLabelSet,
  global: Pick<GlobalLabel, "normal">
): NamedItemSource[] => {
  return [
    defineTraitRegularParam(set.regularParam),
    defineTraitExtraParam(set.extraParam),
    defineTraitSpecialParam(set.specialParam),
    defineTraitCollapseType(set.collaps, global),
    defineTraitSpecialFlag(set.specialFlag),
    {
      source: skillSourceId(),
      label: labels.skill.domainName,
      items: items.skills,
    },
    {
      source: stateSourceId(),
      label: labels.state.domainName,
      items: items.states,
    },
  ];
};

const xxxx = (
  labels: TraitLabelSet,
  dataLabel: DataLabels,
  items: Items
): Map<number, FormatCompiled> => {
  const list: FormatLabelResolved<number>[] = resolveTraitLabels(
    labels
  ) satisfies TraitFormat[];
  return mergeItemsSource(list, tttt(items, dataLabel, labels, { normal: "" }));
};

const compileTraitRule = (rule: FormatRule<Trait>) => {};
