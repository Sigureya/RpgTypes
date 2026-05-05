import { Data_Enemy, Data_Skill, Data_Armor, Data_Class, Data_Item, Data_Weapon, Data_State } from '../../../../../rmmz';
import { ExtractedActorTexts } from './actor';
import { ExtractedCommandItem, ExtractedTroopTextItem } from './command';
import { ExtractedTextBundle, ExtractedTextItemG } from './mainData';
import { ExtractedPluginItem } from './plugin';
export interface ExtractedTextMainDataFinal<UUID> {
    map: ExtractedTextItemG<UUID>[];
    actors: ExtractedActorTexts<UUID>;
    items: ExtractedTextBundle<Data_Item, UUID>[];
    weapons: ExtractedTextBundle<Data_Weapon, UUID>[];
    armors: ExtractedTextBundle<Data_Armor, UUID>[];
    skills: ExtractedTextBundle<Data_Skill, UUID>[];
    enemies: ExtractedTextBundle<Data_Enemy, UUID>[];
    classes: ExtractedTextBundle<Data_Class, UUID>[];
    states: ExtractedTextBundle<Data_State, UUID>[];
    commonEvents: ExtractedCommandItem<UUID>[];
    pluginParams: ExtractedPluginItem<UUID>[];
    troops: ExtractedTroopTextItem<UUID>[];
}
