import type { Game_Actor } from "../object";
import type { Rectangle } from "../window";
import type { Scene_MenuBase } from "./SceneMenuBase";
export declare class Scene_Skill extends Scene_MenuBase {
    createSkillTypeWindow(): void;
    skillTypeWindowRect(): Rectangle;
    createStatusWindow(): void;
    statusWindowRect(): Rectangle;
    createItemWindow(): void;
    itemWindowRect(): Rectangle;
    needsPageButtons(): boolean;
    arePageButtonsEnabled(): boolean;
    refreshActor(): void;
    user(): Game_Actor;
    commandSkill(): void;
    onItemOk(): void;
    onItemCancel(): void;
    playSeForItem(): void;
    useItem(): void;
    onActorChange(): void;
}
