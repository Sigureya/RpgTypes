import type { Game_Actor } from "../object";
import type { Window_StatusBase } from "./Window_StatusBase";
export declare class Window_SkillStatus extends Window_StatusBase {
    setActor(actor: Game_Actor): void;
    refresh(): void;
}
