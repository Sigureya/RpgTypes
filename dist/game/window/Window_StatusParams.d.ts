import type { Game_Actor } from "../object";
import type { Window_StatusBase } from "./Window_StatusBase";
export declare class Window_StatusParams extends Window_StatusBase {
    setActor(actor: Game_Actor): void;
    maxItems(): number;
    itemHeight(): number;
    drawItem(index: number): void;
    drawItemBackground(index: number): void;
}
