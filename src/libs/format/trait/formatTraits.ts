import { mergeItemsSource } from "@RpgTypes/namedItemSource/format/mergeItemsSource";
import { defineGameDataSources } from "@RpgTypes/rpg/data/gameData";
import type { GameData } from "@RpgTypes/rpg/data/gameDataTypes";
import {
  defineSystemItems,
  type Data_System,
  type System_DataNames,
} from "@RpgTypes/system";
import type {
  FormatRule,
  NamedItemSource,
  FormatCompiled,
  FormatLabelResolved,
} from "src/namedItemSource";
import type {
  Trait,
  DataLabels,
  TraitLabelSet,
  NormalLabel,
  TraitFormat,
} from "src/rpg";
import { resolveTraitLabels, defineTraitItems } from "src/rpg";

const RULE: FormatRule<Trait> = {
  itemMapper: {
    dataIdKey: "dataId",
    kindKey: "code",
    placeHolder: "name",
  },
};

export const defineTraitSources = (
  gameData: GameData,
  gameDataLabels: DataLabels,
  traitLabels: TraitLabelSet,
  global: NormalLabel,
  system: Data_System,
  label: Record<keyof System_DataNames, string>
): NamedItemSource[] => {
  return [
    ...defineTraitItems(traitLabels, global),
    ...defineGameDataSources(gameData, gameDataLabels),
    ...defineSystemItems(system, label),
  ];
};

export const mergeTraitSource = (
  labels: TraitLabelSet,
  dataLabel: DataLabels,
  items: GameData
): Map<number, FormatCompiled> => {
  const list: FormatLabelResolved<number>[] = resolveTraitLabels(
    labels
  ) satisfies TraitFormat[];

  return mergeItemsSource(
    list,
    []
    // defineTraitSources(items, dataLabel, labels, { normal: "" })
  );
};

const compileTraitRule = (rule: FormatRule<Trait>) => {};
