import type { Rectangle } from "./rectangle";
import type { Data_NamedItem as Data_BaseItem } from "../../schema/";
import type { Window_Selectable } from "./Window_Selectable";
import type { ISelectable } from "./types/";
export declare class Window_ItemList extends Window_Selectable implements ISelectable<Data_BaseItem> {
    initialize(rect: Rectangle): void;
    setCategory(category: string): void;
    maxCols(): number;
    colSpacing(): number;
    maxItems(): number;
    item(): Data_BaseItem;
    itemAt(index: number): Data_BaseItem;
    isCurrentItemEnabled(): boolean;
    includes(item: Data_BaseItem): void;
    needsNumber(): void;
    isEnabled(item: Data_BaseItem | undefined | null): boolean;
    makeItemList(): boolean;
    selectLast(): void;
    drawItem(index: number): void;
    numberWidth(): number;
    drawItemNumber(item: Data_BaseItem, x: number, y: number, width: number): void;
    updateHelp(): void;
    refresh(): void;
}
