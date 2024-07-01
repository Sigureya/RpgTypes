import { Rectangle } from "../window";
import { Scene_MenuBase } from "./SceneMenuBase";

export declare class Scene_GameEnd extends Scene_MenuBase {
  initialize(): void;
  create(): void;
  stop(): void;
  createBackground(): void;
  createCommandWindow(): void;
  commandWindowRect(): Rectangle;
  commandToTitle(): void;
}
