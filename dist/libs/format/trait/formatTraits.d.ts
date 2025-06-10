import { SystemLabel_DataNames, System_DataNames } from '../../system/core/dataTypes';
import { NamedItemSource, FormatCompiled } from '../../namedItemSource';
import { DataLabels, EffectDefinitionResolved, GameData, ItemEffectLabelSet, NormalLabel, TraitLabelSet } from '../../rpg';
export declare const buildReferenceItemSources: (gameData: GameData, gameDataLabels: DataLabels, traitLabels: TraitLabelSet, global: NormalLabel, system: System_DataNames, label: SystemLabel_DataNames) => NamedItemSource[];
export declare const compileTraitDisplayData: (namedItemSource: ReadonlyArray<NamedItemSource>, traitLabels: TraitLabelSet) => Map<number, FormatCompiled>;
export declare const compileItemEffectDisplayData: (namedItemSource: ReadonlyArray<NamedItemSource>, itemEffectLabels: ItemEffectLabelSet, additional?: ReadonlyArray<EffectDefinitionResolved>) => Map<number, FormatCompiled>;
