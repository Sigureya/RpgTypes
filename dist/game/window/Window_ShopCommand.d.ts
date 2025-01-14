import type { Window_HorzCommand } from "./Window_HorzCommand";
export declare class Window_ShopCommand extends Window_HorzCommand {
    setPurchaseOnly(purchaseOnly: boolean): void;
    maxCols(): number;
    makeCommandList(): void;
}
