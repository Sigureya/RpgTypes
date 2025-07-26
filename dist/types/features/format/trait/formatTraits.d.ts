import { GameData, DataLabels, TraitLabelSet, NormalLabel, ItemEffectLabelSet, EffectDefinitionResolved } from '../../../rmmz/rpg';
import { System_RPG_DataNames, SystemLabel_DataNames } from '../../../rmmz/system';
import { NamedItemSource, FormatCompiled } from '../../../libs/namedItemSource';
export declare const buildReferenceItemSources: (gameData: GameData, gameDataLabels: DataLabels, traitLabels: TraitLabelSet, global: NormalLabel, system: System_RPG_DataNames, label: SystemLabel_DataNames) => NamedItemSource[];
export declare const compileTraitDisplayData: (namedItemSource: ReadonlyArray<NamedItemSource>, traitLabels: TraitLabelSet) => Map<number, FormatCompiled>;
export declare const compileItemEffectDisplayData: (namedItemSource: ReadonlyArray<NamedItemSource>, itemEffectLabels: ItemEffectLabelSet, additional?: ReadonlyArray<EffectDefinitionResolved>) => Map<number, FormatCompiled>;
