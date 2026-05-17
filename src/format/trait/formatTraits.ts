import type {
  FormatCompiled,
  NamedItemSource,
} from "@RpgTypes/libs/namedItemSource";
import { mergeItemsSource } from "@RpgTypes/libs/namedItemSource";
import type {
  GameData,
  DataLabels,
  TraitLabelSet,
  NormalLabel,
  ItemEffectLabelSet,
  EffectDefinitionResolved,
  SystemLabel_DataNames,
  System_RPG_DataNames,
} from "@RpgTypes/rmmz";
import {
  defineTraitItems,
  defineGameDataSources,
  resolveTraitLabels,
  resolveItemEffectLabels,
  defineSystemItems,
} from "@RpgTypes/rmmz";

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
