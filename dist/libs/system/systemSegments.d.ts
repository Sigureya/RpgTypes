import { System_Advanced, System_Bgm, System_BooleanOptionsRMMMZ, System_GameInitial, System_Me, System_SoundsObject, Terms_Basic, Terms_Command, Terms_Messages } from './core';
import { System_DataNames } from './core/dataTypes';
import { MenuCommandsEnabled, ItemCategories } from './members';
import { EditorSettings } from './setting';
import { System_Vehicle, System_Text, System_Debug, System_Images, System_ImageSize } from './subset';
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
