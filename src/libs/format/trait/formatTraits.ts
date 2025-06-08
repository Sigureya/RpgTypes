import { mergeItemsSource } from "@RpgTypes/namedItemSource/format/mergeItemsSource";
import type {
  FormatRule,
  NamedItemSource,
  FormatCompiled,
  FormatLabelResolved,
} from "src/namedItemSource";
import type {
  Trait,
  Data_Skill,
  Data_State,
  DataLabels,
  TraitLabelSet,
  NormalLabel,
  SourceId_DataSkill,
  SourceId_DataState,
  TraitFormat,
} from "src/rpg";
import {
  defineTraitRegularParam,
  defineTraitExtraParam,
  defineTraitSpecialParam,
  defineTraitCollapseType,
  defineTraitSpecialFlag,
  resolveTraitLabels,
} from "src/rpg";

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

export const defineTraitSources = (
  items: Items,
  labels: DataLabels,
  set: TraitLabelSet,
  global: NormalLabel
): NamedItemSource[] => {
  return [
    defineTraitRegularParam(set.regularParam),
    defineTraitExtraParam(set.extraParam),
    defineTraitSpecialParam(set.specialParam),
    defineTraitCollapseType(set.collaps, global),
    defineTraitSpecialFlag(set.specialFlag),
    {
      source: {
        author: "rmmz",
        module: "data",
        kind: "skill",
      } satisfies SourceId_DataSkill,
      label: labels.skill.domainName,
      items: items.skills,
    },
    {
      source: {
        author: "rmmz",
        module: "data",
        kind: "state",
      } satisfies SourceId_DataState,
      label: labels.state.domainName,
      items: items.states,
    },
  ];
};

export const mergeTraitSource = (
  labels: TraitLabelSet,
  dataLabel: DataLabels,
  items: Items
): Map<number, FormatCompiled> => {
  const list: FormatLabelResolved<number>[] = resolveTraitLabels(
    labels
  ) satisfies TraitFormat[];

  return mergeItemsSource(
    list,
    defineTraitSources(items, dataLabel, labels, { normal: "" })
  );
};

const compileTraitRule = (rule: FormatRule<Trait>) => {};
