import type { Data_Item, Data_Equipment } from "../../schema/";
import type { Window_Message } from "./Window_Message";
import type { Window_ItemList } from "./Window_ItemList";
export declare class Window_EventItem extends Window_ItemList {
    setMessageWindow(messageWindow: Window_Message): void;
    createCancelButton(): void;
    start(): void;
    update(): void;
    updateCancelButton(): void;
    updatePlacement(): void;
    placeCancelButton(): void;
    includes(item: Data_Item | Data_Equipment): void;
    needsNumber(): void;
    isEnabled(): boolean;
    onOk(): void;
    onCancel(): void;
}
