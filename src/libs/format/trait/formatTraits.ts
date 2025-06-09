import { mergeItemsSource } from "@RpgTypes/namedItemSource/format/mergeItemsSource";
import { defineGameDataSources } from "@RpgTypes/rpg/data/gameData";
import type { GameData } from "@RpgTypes/rpg/data/gameDataTypes";
import type { Data_System } from "@RpgTypes/system";
import type { System_DataNames } from "@RpgTypes/system/core/dataTypes";
import type {
  NamedItemSource,
  FormatCompiled,
  FormatLabelResolved,
} from "src/namedItemSource";
import type {
  DataLabels,
  TraitLabelSet,
  NormalLabel,
  TraitFormat,
} from "src/rpg";
import { resolveTraitLabels, defineTraitItems } from "src/rpg";

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
    //   ...defineSystemItems(system, label),
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
