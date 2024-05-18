import { Rectangle } from "src/types/rectangle";
import { Game_Actor } from "../object/battler";
import { Equip } from "../object/battler/base/equip";
import { Window_StatusBase } from "./Window_StatusBase";

//-----------------------------------------------------------------------------
// Window_ShopStatus
//
// The window for displaying number of items in possession and the actor's
// equipment on the shop screen.
export declare class Window_ShopStatus extends Window_StatusBase {
  initialize(rect: Rectangle): void;

  refresh(): void;

  setItem(item: Equip): void;

  isEquipItem(): boolean;

  drawPossession(x: number, y: number): void;

  drawEquipInfo(x: number, y: number): void;

  statusMembers(): void;

  pageSize(): number;

  maxPages(): number;

  drawActorEquipInfo(x: number, y: number, actor: Game_Actor): void;

  paramId(): number;

  currentEquippedItem(actor: Game_Actor, etypeId: number): Equip | null;

  update(): void;

  updatePage(): void;

  isPageChangeEnabled(): boolean;

  isPageChangeRequested(): boolean;

  changePage(): void;
}
