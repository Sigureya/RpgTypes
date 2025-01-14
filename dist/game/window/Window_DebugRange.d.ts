import type { Window_Selectable } from "./Window_Selectable";
import type { Window_NameEdit } from "./Window_NameEdit";
export declare class Window_DebugRange extends Window_Selectable {
    maxItems(): number;
    update(): void;
    mode(index: number): void;
    topId(index: number): void;
    isSwitchMode(index: number): boolean;
    drawItem(index: number): void;
    isCancelTriggered(): boolean;
    processCancel(): void;
    setEditWindow(editWindow: Window_NameEdit): void;
}
