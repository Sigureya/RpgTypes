import { MenuCommandsEnabled, System_Advanced, System_SoundsObject, Terms_Basic, Terms_Command, Terms_Messages, ItemCategories } from './members';
import { EditorSettings } from './setting';
import { System_BooleanOptions, System_Vehicle, System_DataNames, System_Bgm, System_Text, System_Debug, System_Images, System_GameInitial, System_ImageSize, System_Me } from './subset';
export interface SystemDataFragments {
    options: Partial<System_BooleanOptions>;
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
