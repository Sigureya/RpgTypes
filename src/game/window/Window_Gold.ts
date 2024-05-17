import { Rectangle } from "src/types/rectangle";
import { Window_Base } from "./Window_Base";

//-----------------------------------------------------------------------------
// Window_Gold
//
// The window for displaying the party's gold.
export declare class Window_Gold extends Window_Base {
  initialize(rect: Rectangle): void;

  colSpacing(): void;

  refresh(): void;

  value(): void;

  currencyUnit(): void;

  override open(): void;
}
