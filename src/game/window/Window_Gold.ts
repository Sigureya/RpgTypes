import type { Window_Base } from "./Window_Base";

//-----------------------------------------------------------------------------
// Window_Gold
//
// The window for displaying the party's gold.
export declare class Window_Gold extends Window_Base {
  colSpacing(): void;

  refresh(): void;

  value(): void;

  currencyUnit(): string;

  open(): void;
}
