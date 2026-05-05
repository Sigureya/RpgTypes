import type {
  Data_Enemy,
  Data_Skill,
  Data_Armor,
  Data_Class,
  Data_Item,
  Data_Weapon,
  Data_State,
} from "@RpgTypes/rmmz";
import type { ExtractedActorTexts } from "./actor";
import type { ExtractedCommandItem, ExtractedTroopTextItem } from "./command";
import type { ExtractedTextBundle, ExtractedTextItem } from "./mainData";
import type { ExtractedPluginItem } from "./plugin";
import type { SystemTexts } from "./system";

export interface ExtractedTextFinal<UUID, NoteData> {
  map: ExtractedTextItem<UUID>[];
  system: SystemTexts<UUID>;
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
  noteX: NoteData[];
}
