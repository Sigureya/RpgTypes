import type { System_Advanced } from "./advanced";
import type { AttackMotion } from "./attackMotion";
import type { System_SoundsArray } from "./audio";
import type {
  ItemCategoriesArray,
  MenuCommandsEnabledArray,
} from "./booleanOptions";

export interface System_Bundle {
  advanced: System_Advanced;
  battleSystem: number;
  attackMotions: AttackMotion[];
  magicSkills: number[];

  sounds: System_SoundsArray;
  itemCategories: ItemCategoriesArray;
  menuCommands: MenuCommandsEnabledArray;
}
