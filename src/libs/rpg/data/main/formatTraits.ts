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
import { resolveTraitLabels, stateSourceId } from "./traitContainers";
import type { Data_Skill } from "./usableItems";
import { skillSourceId } from "./usableItems";
import { mergeItemsSource } from "@RpgTypes/namedItemSource/format/mergeItemsSource";
import type { DataLabels } from "./dataLabels";

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

const tttt = (items: Items, labels: DataLabels): NamedItemSource[] => {
  return [
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
  return mergeItemsSource(list, tttt(items, dataLabel));
};

const compileTraitRule = (rule: FormatRule<Trait>) => {};
