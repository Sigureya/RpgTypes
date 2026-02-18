import type {
  ItemCategories,
  MenuCommandsEnabled,
  System_Advanced,
  System_Bgm,
  System_BooleanGameOptions,
  System_RPG_DataNames,
  System_GameInitial,
  System_TitleImages,
  System_ImageSize,
  System_Me,
  System_SoundsObject,
  System_Vehicles,
  System_TermsPartial,
  AttackMotion,
  BattleRuleRMMZ,
  TitleCommandWindow,
} from "./core";
import type {
  EditorSettings,
  System_TestBattle,
  System_EditorTemporary,
} from "./gameEdit";
import type { System_Text } from "./subset";

export interface SystemDataFragments {
  locale: string;
  options: Partial<System_BooleanGameOptions>;
  advanced: Partial<System_Advanced>;
  vehicles: Partial<System_Vehicles>;
  editing: Partial<EditorSettings>;
  dataNames: Partial<System_RPG_DataNames>;
  bgm: Partial<System_Bgm>;
  me: Partial<System_Me>;
  texts: Partial<System_Text>;
  sounds: Partial<System_SoundsObject>;
  battleTest: Partial<System_TestBattle>;
  images: Partial<System_TitleImages>;
  gameInit: Partial<System_GameInitial>;
  itemCategories: Partial<ItemCategories>;
  size: Partial<System_ImageSize>;
  terms: System_TermsPartial;
  menuComamnds: Partial<MenuCommandsEnabled>;
  editorTemporary?: Partial<System_EditorTemporary>;
  attackMotion: AttackMotion[];
  battle: Partial<BattleRuleRMMZ>;
  titleCommandWindow: TitleCommandWindow;
  vesionId: number;
}
