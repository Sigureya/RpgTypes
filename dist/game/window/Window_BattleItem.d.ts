import type { Data_UsableItem } from "../../schema";
import type { Window_ItemList } from "./Window_ItemList";
export declare class Window_BattleItem extends Window_ItemList {
    includes(item: Data_UsableItem): void;
    show(): void;
    hide(): void;
}
