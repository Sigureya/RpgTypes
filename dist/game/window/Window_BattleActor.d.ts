import type { Window_BattleStatus } from "./Window_BattleStatus";
export declare class Window_BattleActor extends Window_BattleStatus {
    show(): void;
    hide(): void;
    select(index: number): void;
    processTouch(): void;
}
