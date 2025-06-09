import type {
  System_Advanced,
  System_Bgm,
  System_BooleanOptionsRMMMZ,
  System_GameInitial,
  System_Me,
  System_SoundsObject,
} from "./core";
import type { System_DataNames } from "./core/dataTypes";
import type {
  MenuCommandsEnabled,
  Terms_Basic,
  Terms_Command,
  Terms_Messages,
} from "./members";
import type { ItemCategories } from "./members";
import type { EditorSettings } from "./setting";
import type {
  System_Vehicle,
  System_Text,
  System_Debug,
  System_Images,
  System_ImageSize,
} from "./subset";

export interface SystemDataFragments {
  options: Partial<System_BooleanOptionsRMMMZ>;
  advanced: Partial<System_Advanced>;
  vehicles: Partial<System_Vehicle>;
  editing: Partial<EditorSettings>;
  dataNames: Partial<System_DataNames>;
  bgm: Partial<System_Bgm>;
  me: Partial<System_Me>;
  texts: Partial<System_Text>;
  sounds: Partial<System_SoundsObject>;
  debug: Partial<System_Debug>;
  images: Partial<System_Images>;
  gameInit: Partial<System_GameInitial>;
  itemCategories: Partial<ItemCategories>;
  size: Partial<System_ImageSize>;
  terms: {
    basic?: Partial<Terms_Basic>;
    command?: Partial<Terms_Command>;
    messages?: Partial<Terms_Messages>;
  };
  menuComamnds: Partial<MenuCommandsEnabled>;
}
