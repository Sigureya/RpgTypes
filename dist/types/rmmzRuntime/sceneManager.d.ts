import { Rmmz_Scene_Base } from './scene/core';
export interface Rmmz_SceneManager {
    goto(sceneClass: new () => Rmmz_Scene_Base): void;
    push(sceneClass: new () => Rmmz_Scene_Base): void;
    pop(): void;
    isSceneChanging(): boolean;
}
