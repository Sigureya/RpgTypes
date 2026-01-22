import { System_Advanced } from './advanced';
import { AttackMotion } from './attackMotion';
import { System_SoundsArray } from './audio';
import { ItemCategoriesArray, MenuCommandsEnabledArray } from './booleanOptions';
export interface System_Bundle {
    advanced: System_Advanced;
    battleSystem: number;
    attackMotions: AttackMotion[];
    magicSkills: number[];
    sounds: System_SoundsArray;
    itemCategories: ItemCategoriesArray;
    menuCommands: MenuCommandsEnabledArray;
}
