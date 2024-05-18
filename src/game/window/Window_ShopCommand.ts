import { Rectangle } from "src/types/rectangle";
import { Window_HorzCommand } from "./Window_HorzCommand";

//-----------------------------------------------------------------------------
// Window_ShopCommand
//
// The window for selecting buy/sell on the shop screen.
export declare class Window_ShopCommand extends Window_HorzCommand {
  initialize(rect: Rectangle): void;

  setPurchaseOnly(purchaseOnly: boolean): void;

  maxCols(): number;

  makeCommandList(): void;
}
