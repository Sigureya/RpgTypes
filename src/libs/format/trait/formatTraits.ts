import type { SystemLabel_DataNames } from "@RpgTypes/system/core/dataTypes";
import {
  type System_DataNames,
  defineSystemItems,
} from "@RpgTypes/system/core/dataTypes";
import {
  type NamedItemSource,
  type FormatCompiled,
  mergeItemsSource,
} from "src/namedItemSource";
import type { DataLabels, GameData, NormalLabel, TraitLabelSet } from "src/rpg";
import {
  resolveTraitLabels,
  defineTraitItems,
  defineGameDataSources,
} from "src/rpg";

export const defineTraitSources = (
  gameData: GameData,
  gameDataLabels: DataLabels,
  traitLabels: TraitLabelSet,
  global: NormalLabel,
  system: System_DataNames,
  label: SystemLabel_DataNames
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
  items: GameData,
  normalLabel: NormalLabel,
  system: System_DataNames,
  label: SystemLabel_DataNames
): Map<number, FormatCompiled> => {
  return mergeItemsSource(
    resolveTraitLabels(labels),
    defineTraitSources(items, dataLabel, labels, normalLabel, system, label)
  );
};
