import type { Rectangle, Window_Command } from "../window";
import type { Scene_MenuBase } from "./SceneMenuBase";

export declare class Scene_GameEnd extends Scene_MenuBase {
  _commandWindow: Window_Command;
  initialize(): void;
  create(): void;
  stop(): void;
  createBackground(): void;
  createCommandWindow(): void;
  commandWindowRect(): Rectangle;
  commandToTitle(): void;
}
