import { Rectangle } from "src/types/rectangle";
import { Data_BaseItem } from "../data/item/baseItem";
import { Window_Selectable } from "./Window_Selectable";

//-----------------------------------------------------------------------------
// Window_ShopNumber
//
// The window for inputting quantity of items to buy or sell on the shop
// screen.
export declare class Window_ShopNumber extends Window_Selectable {
  initialize(rect: Rectangle): void;

  isScrollEnabled(): boolean;

  number(): void;

  setup(item: Data_BaseItem, max: number, price: number): void;

  setCurrencyUnit(currencyUnit: string): void;

  createButtons(): void;

  placeButtons(): void;

  totalButtonWidth(): number;

  buttonSpacing(): void;

  refresh(): void;

  drawCurrentItemName(): string;

  drawMultiplicationSign(): void;

  multiplicationSign(): void;

  multiplicationSignX(): number;

  drawNumber(): void;

  drawHorzLine(): void;

  drawTotalPrice(): void;

  itemNameY(): number;

  totalPriceY(): number;

  buttonY(): number;

  cursorWidth(): number;

  cursorX(): number;

  maxDigits(): void;

  update(): void;

  playOkSound(): void;

  processNumberChange(): void;

  changeNumber(amount: number): void;

  itemRect(): Rectangle;

  isTouchOkEnabled(): boolean;

  onButtonUp(): void;

  onButtonUp2(): void;

  onButtonDown(): void;

  onButtonDown2(): void;

  onButtonOk(): void;
}
