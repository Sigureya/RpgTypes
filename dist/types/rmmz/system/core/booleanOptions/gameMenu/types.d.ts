import { ItemCategoriesArray, MenuCommandsEnabledArray } from '.';
export interface System_BooleanGameMenuOptions extends System_BooleanMenuCommands {
    itemCategories: ItemCategoriesArray;
    menuCommands: MenuCommandsEnabledArray;
}
export interface System_BooleanMenuCommands {
    menuCommands: MenuCommandsEnabledArray;
}
