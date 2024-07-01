import { ShopGoods } from "../../schema";
import { Rectangle } from "../window";

export declare class Scene_Shop {
  initialize(): void;
  prepare(goods: ShopGoods[], purchaseOnly: boolean): void;
  create(): void;
  createGoldWindow(): void;
  goldWindowRect(): Rectangle;
  createCommandWindow(): void;
  commandWindowRect(): Rectangle;
  createDummyWindow(): void;
  dummyWindowRect(): Rectangle;
  createNumberWindow(): void;
  numberWindowRect(): Rectangle;
  createStatusWindow(): void;
  statusWindowRect(): Rectangle;
  createBuyWindow(): void;
  buyWindowRect(): Rectangle;
  createCategoryWindow(): void;
  categoryWindowRect(): Rectangle;
  createSellWindow(): void;
  sellWindowRect(): void;
  statusWidth(): number;
  activateBuyWindow(): void;
  activateSellWindow(): void;
  commandBuy(): void;
  commandSell(): void;
  onBuyOk(): void;
  onBuyCancel(): void;
  onCategoryOk(): void;
  onCategoryCancel(): void;
  onSellOk(): void;
  onSellCancel(): void;
  onNumberOk(): void;
  onNumberCancel(): void;
  doBuy(number: number): void;
  doSell(number: number): void;
  endNumberInput(): void;
  maxBuy(): number;
  maxSell(): number;
  money(): number;
  currencyUnit(): number;
  buyingPrice(): number;
  sellingPrice(): number;
}
