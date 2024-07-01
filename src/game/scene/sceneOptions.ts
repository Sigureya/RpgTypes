import { Rectangle, Window_Options } from "../window";
import { Scene_MenuBase } from "./SceneMenuBase";

export declare class Scene_Option extends Scene_MenuBase {
  _optionWindow: Window_Options;
  createOptionsWindow(): void;
  optionsWindowRect(): Rectangle;
  maxCommands(): number;
  maxVisibleCommands(): number;
}
