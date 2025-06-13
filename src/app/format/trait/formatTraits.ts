import type {
  GameData,
  DataLabels,
  TraitLabelSet,
  NormalLabel,
  ItemEffectLabelSet,
  EffectDefinitionResolved,
} from "@RpgTypes/rpg";
import {
  defineTraitItems,
  defineGameDataSources,
  resolveTraitLabels,
  resolveItemEffectLabels,
} from "@RpgTypes/rpg";
import type {
  System_RPG_DataNames,
  SystemLabel_DataNames,
} from "@RpgTypes/system";
import { defineSystemItems } from "@RpgTypes/system";
import {
  type NamedItemSource,
  type FormatCompiled,
  mergeItemsSource,
} from "src/namedItemSource";

export const buildReferenceItemSources = (
  gameData: GameData,
  gameDataLabels: DataLabels,
  traitLabels: TraitLabelSet,
  global: NormalLabel,
  system: System_RPG_DataNames,
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
