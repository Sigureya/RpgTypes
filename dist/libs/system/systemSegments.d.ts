import { ItemCategories, MenuCommandsEnabled, System_Advanced, System_Bgm, System_BooleanOptionsRMMMZ, System_GameInitial, System_ImageSize, System_Me, System_SoundsObject, System_Vehicles, Terms_Basic, Terms_GameCommands, Terms_Messages } from './core';
import { System_DataNames } from './core/dataTypes';
import { EditorSettings } from './setting';
import { System_Text, System_Debug, System_Images } from './subset';
export interface SystemDataFragments {
    options: Partial<System_BooleanOptionsRMMMZ>;
    advanced: Partial<System_Advanced>;
    vehicles: Partial<System_Vehicles>;
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
        command?: Partial<Terms_GameCommands>;
        messages?: Partial<Terms_Messages>;
    };
    menuComamnds: Partial<MenuCommandsEnabled>;
}
