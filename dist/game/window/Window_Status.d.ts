import type { Game_Actor } from "../../game";
import type { Window_StatusBase } from "./Window_StatusBase";
export declare class Window_Status extends Window_StatusBase {
    setActor(actor: Game_Actor): void;
    refresh(): void;
    drawBlock1(): void;
    block1Y(): number;
    drawBlock2(): void;
    block2Y(): number;
    drawBasicInfo(x: number, y: number): void;
    drawExpInfo(x: number, y: number): void;
    expTotalValue(): void;
    expNextValue(): void;
}
