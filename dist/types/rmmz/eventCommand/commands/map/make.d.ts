import { Command_ChangeParallax, ParamObject_ChangeParallax, Command_ScrollMap, ParamObject_ScrollMap, Command_HideMapNameDisplay, Command_ShowMapNameDisplay, Command_ChangeTileset, ParamObject_ChangeTileset } from './types';
export declare const makeCommandChangeParallax: (params: ParamObject_ChangeParallax, indent?: number) => Command_ChangeParallax;
export declare const makeCommandScrollMap: (params: ParamObject_ScrollMap, indent?: number) => Command_ScrollMap;
export declare const makeCommandShowMapName: (indent?: number) => Command_ShowMapNameDisplay;
export declare const makeCommandHideMapName: (indent?: number) => Command_HideMapNameDisplay;
export declare const makeCommandChangeTileset: (params?: Partial<ParamObject_ChangeTileset>, indent?: number) => Command_ChangeTileset;
