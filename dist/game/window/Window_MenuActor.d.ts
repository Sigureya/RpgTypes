import type { Data_UsableItem } from "../../schema";
import type { Window_MenuStatus } from "./Window_MenuStatus";
export declare class Window_MenuActor extends Window_MenuStatus {
    active: Window_MenuActor;
    processOk(): void;
    selectLast(): void;
    selectForItem(item: Data_UsableItem): void;
}
