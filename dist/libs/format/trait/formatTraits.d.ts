import { NamedItemSource, FormatCompiled } from '../../namedItemSource';
import { DataLabels, EffectDefinitionResolved, GameData, ItemEffectLabelSet, NormalLabel, TraitLabelSet } from '../../rpg';
import { System_RPG_DataNames, SystemLabel_DataNames } from '../../system';
export declare const buildReferenceItemSources: (gameData: GameData, gameDataLabels: DataLabels, traitLabels: TraitLabelSet, global: NormalLabel, system: System_RPG_DataNames, label: SystemLabel_DataNames) => NamedItemSource[];
export declare const compileTraitDisplayData: (namedItemSource: ReadonlyArray<NamedItemSource>, traitLabels: TraitLabelSet) => Map<number, FormatCompiled>;
export declare const compileItemEffectDisplayData: (namedItemSource: ReadonlyArray<NamedItemSource>, itemEffectLabels: ItemEffectLabelSet, additional?: ReadonlyArray<EffectDefinitionResolved>) => Map<number, FormatCompiled>;
