import { Rectangle } from "src/types/rectangle";
import { Game_Actor } from "../object/battler";
import { Data_Equip } from "../object/battler/base/equip";
import { Window_ItemList, Window_Status } from "./src";

export declare class Window_EquipItem extends Window_ItemList {
  initialize(rect: Rectangle): void;

  maxCols(): number;

  colSpacing(): number;

  setActor(actor: Game_Actor): void;

  setSlotId(slotId: number): void;

  includes(item: Data_Equip): void;

  etypeId(): void;

  isEnabled(/*item*/): boolean;

  selectLast(): void;

  setStatusWindow(statusWindow: Window_Status): void;

  updateHelp(): void;

  playOkSound(): void;
}
