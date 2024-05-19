import { Bitmap } from "../core";
import { Scene_Base } from "../scene/Scene_Base";

export interface Manager_Scene {
  reloadGame(): void;
  isSceneChanging(): boolean;

  isNextScene(sceneClass: typeof Scene_Base): boolean;
  isPreviousScene(sceneClass: typeof Scene_Base): boolean;
  goto(sceneClass: typeof Scene_Base): void;
  push(sceneClass: typeof Scene_Base): void;
  pop(): void;
  snapForBackground(): void;
  backgroundBitmap(): Bitmap;
}
