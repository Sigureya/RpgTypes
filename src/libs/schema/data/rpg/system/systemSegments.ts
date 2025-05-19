import type { System_Advanced, System_SoundsObject } from "./members";
import type { ItemCategories } from "./members";
import type { EditorSettings } from "./setting";
import type {
  System_BooleanOptions,
  System_Vehicle,
  System_DataNames,
  System_Bgm,
  System_Text,
  System_Debug,
  System_Images,
  System_GameInitial,
} from "./subset";

export interface SystemDataFragments {
  options: Partial<System_BooleanOptions>;
  advanced: Partial<System_Advanced>;
  vehicles: Partial<System_Vehicle>;
  editing: Partial<EditorSettings>;
  dataNames: Partial<System_DataNames>;
  bgm: Partial<System_Bgm>;
  texts: Partial<System_Text>;
  sounds: Partial<System_SoundsObject>;
  debug: Partial<System_Debug>;
  images: Partial<System_Images>;
  gameInit: Partial<System_GameInitial>;
  itemCategories: Partial<ItemCategories>;
}
