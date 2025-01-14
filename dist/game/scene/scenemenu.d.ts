import type { Rectangle } from "../window";
import type { Scene_MenuBase } from "./SceneMenuBase";
export declare class Scene_Menu extends Scene_MenuBase {
    constructor();
    initialize(): void;
    helpAreaHeight(): number;
    create(): void;
    start(): void;
    createCommandWindow(): void;
    commandWindowRect(): Rectangle;
    createGoldWindow(): void;
    goldWindowRect(): Rectangle;
    createStatusWindow(): void;
    statusWindowRect(): Rectangle;
    commandItem(): void;
    commandPersonal(): void;
    commandFormation(): void;
    commandOptions(): void;
    commandSave(): void;
    commandGameEnd(): void;
    onPersonalOk(): void;
    onPersonalCancel(): void;
    onFormationOk(): void;
    onFormationCancel(): void;
}
