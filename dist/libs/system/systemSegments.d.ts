import { ItemCategories, MenuCommandsEnabled, System_Advanced, System_Bgm, System_BooleanGameOptions, System_RPG_DataNames, System_GameInitial, System_TitleImages, System_ImageSize, System_Me, System_SoundsObject, System_Vehicles, Terms_Basic, Terms_GameCommands, Terms_Messages } from './core';
import { EditorSettings, System_TestBattle, System_EditorTemporary } from './gameEdit';
import { System_Text } from './subset';
export interface SystemDataFragments {
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
    terms: {
        basic?: Partial<Terms_Basic>;
        command?: Partial<Terms_GameCommands>;
        messages?: Partial<Terms_Messages>;
    };
    menuComamnds: Partial<MenuCommandsEnabled>;
    editorTemporary?: Partial<System_EditorTemporary>;
}
