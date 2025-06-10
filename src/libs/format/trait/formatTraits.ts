import type {
  SystemLabel_DataNames,
  System_DataNames,
} from "@RpgTypes/system/core/dataTypes";
import { defineSystemItems } from "@RpgTypes/system/core/dataTypes";
import {
  type NamedItemSource,
  type FormatCompiled,
  mergeItemsSource,
} from "src/namedItemSource";
import type {
  DataLabels,
  GameData,
  ItemEffectLabelSet,
  NormalLabel,
  TraitLabelSet,
} from "src/rpg";
import {
  resolveTraitLabels,
  defineTraitItems,
  defineGameDataSources,
  resolveItemEffectLabels,
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
  traitLabels: TraitLabelSet,
  dataLabel: DataLabels,
  items: GameData,
  normalLabel: NormalLabel,
  system: System_DataNames,
  systemLabels: SystemLabel_DataNames
): Map<number, FormatCompiled> => {
  return mergeItemsSource(
    resolveTraitLabels(traitLabels),
    defineTraitSources(
      items,
      dataLabel,
      traitLabels,
      normalLabel,
      system,
      systemLabels
    )
  );
};

export const mergeItemEffectSource = (
  itemEffectLabels: ItemEffectLabelSet,
  namedItemSource: ReadonlyArray<NamedItemSource>
): Map<number, FormatCompiled> => {
  return mergeItemsSource(
    resolveItemEffectLabels(itemEffectLabels),
    namedItemSource
  );
};
