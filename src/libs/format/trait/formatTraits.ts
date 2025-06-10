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
  EffectDefinitionResolved,
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

export const buildReferenceItemSources = (
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

export const compileTraitDisplayData = (
  namedItemSource: ReadonlyArray<NamedItemSource>,
  traitLabels: TraitLabelSet
): Map<number, FormatCompiled> => {
  return mergeItemsSource(resolveTraitLabels(traitLabels), namedItemSource);
};

export const compileItemEffectDisplayData = (
  namedItemSource: ReadonlyArray<NamedItemSource>,
  itemEffectLabels: ItemEffectLabelSet,
  additional?: ReadonlyArray<EffectDefinitionResolved>
): Map<number, FormatCompiled> => {
  const list = resolveItemEffectLabels(itemEffectLabels);
  return mergeItemsSource(
    additional ? [...list, ...additional] : list,
    namedItemSource
  );
};
