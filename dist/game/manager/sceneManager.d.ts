import type { Bitmap } from "../core";
import type { Scene_Base } from "../scene/sceneBase";
export interface SceneManager_Interface {
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
