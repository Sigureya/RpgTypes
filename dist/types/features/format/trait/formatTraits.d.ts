import { FormatCompiled, NamedItemSource } from '../../../libs/namedItemSource';
import { GameData, DataLabels, TraitLabelSet, NormalLabel, ItemEffectLabelSet, EffectDefinitionResolved, SystemLabel_DataNames, System_RPG_DataNames } from '../../../rmmz';
export declare const buildReferenceItemSources: (gameData: GameData, gameDataLabels: DataLabels, traitLabels: TraitLabelSet, global: NormalLabel, system: System_RPG_DataNames, label: SystemLabel_DataNames) => NamedItemSource[];
export declare const compileTraitDisplayData: (namedItemSource: ReadonlyArray<NamedItemSource>, traitLabels: TraitLabelSet) => Map<number, FormatCompiled>;
export declare const compileItemEffectDisplayData: (namedItemSource: ReadonlyArray<NamedItemSource>, itemEffectLabels: ItemEffectLabelSet, additional?: ReadonlyArray<EffectDefinitionResolved>) => Map<number, FormatCompiled>;
