export interface Rmmz_SceneManager {
    goto(sceneClass: new () => unknown): void;
    push(sceneClass: new () => unknown): void;
    pop(): void;
}
