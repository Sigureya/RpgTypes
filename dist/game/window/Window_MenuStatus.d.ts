import type { Window_StatusBase } from "./Window_StatusBase";
export declare class Window_MenuStatus extends Window_StatusBase {
    maxItems(): number;
    numVisibleRows(): boolean;
    itemHeight(): number;
    actor(index: number): void;
    drawItem(index: number): void;
    drawPendingItemBackground(index: number): void;
    drawItemImage(index: number): void;
    drawItemStatus(index: number): void;
    processOk(): void;
    isCurrentItemEnabled(): boolean;
    selectLast(): void;
    formationMode(): void;
    setFormationMode(formationMode: boolean): void;
    pendingindex(): number;
    setPendingIndex(index: number): void;
}
