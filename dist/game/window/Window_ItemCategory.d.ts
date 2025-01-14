import type { Window_HorzCommand } from "./Window_HorzCommand";
import type { Window_ItemList } from "./Window_ItemList";
export declare class Window_ItemCategory extends Window_HorzCommand {
    maxCols(): number;
    update(): void;
    makeCommandList(): void;
    needsCommand(name: string): void;
    setItemWindow(itemWindow: Window_ItemList): void;
    needsSelection(): void;
}
