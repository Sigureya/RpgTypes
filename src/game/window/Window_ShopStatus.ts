import type { Game_Actor } from "../object";
import type { Data_Equipment } from "../../schema";
import type { Window_StatusBase } from "./Window_StatusBase";

//-----------------------------------------------------------------------------
// Window_ShopStatus
//
// The window for displaying number of items in possession and the actor's
// equipment on the shop screen.
export declare class Window_ShopStatus extends Window_StatusBase {
  refresh(): void;

  setItem(item: Data_Equipment): void;

  isEquipItem(): boolean;

  drawPossession(x: number, y: number): void;

  drawEquipInfo(x: number, y: number): void;

  statusMembers(): void;

  pageSize(): number;

  maxPages(): number;

  drawActorEquipInfo(x: number, y: number, actor: Game_Actor): void;

  paramId(): number;

  currentEquippedItem(
    actor: Game_Actor,
    etypeId: number
  ): Data_Equipment | null;

  update(): void;

  updatePage(): void;

  isPageChangeEnabled(): boolean;

  isPageChangeRequested(): boolean;

  changePage(): void;
}
