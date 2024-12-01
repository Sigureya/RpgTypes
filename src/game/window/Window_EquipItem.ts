import type { Game_Actor } from "../object";
import type { Data_Equipment } from "../../schema";
import type { Window_Status } from "./Window_Status";
import type { Window_ItemList } from "./Window_ItemList";

export declare class Window_EquipItem extends Window_ItemList {
  maxCols(): number;

  colSpacing(): number;

  setActor(actor: Game_Actor): void;

  setSlotId(slotId: number): void;

  includes(item: Data_Equipment): void;

  etypeId(): void;

  isEnabled(item: Data_Equipment): boolean;

  selectLast(): void;

  setStatusWindow(statusWindow: Window_Status): void;

  updateHelp(): void;

  playOkSound(): void;
}
