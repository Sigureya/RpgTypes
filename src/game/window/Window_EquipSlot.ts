import { Game_Actor } from "../object/";
import { Window_Status } from "./Window_Status";
import { Window_StatusBase } from "./Window_StatusBase";
import { Window_EquipItem } from "./Window_EquipItem";
import { Data_Equipment } from "../../schema/";
import { ISelectable } from "./types/ISelctable";

export declare class Window_EquipSlot
  extends Window_StatusBase
  implements ISelectable<Data_Equipment>
{
  setActor(actor: Game_Actor): void;

  update(): void;

  maxItems(): number;

  item(): Data_Equipment;

  itemAt(index: number): Data_Equipment;

  drawItem(index: number): void;

  slotNameWidth(): number;

  isEnabled(index: number): boolean;

  isCurrentItemEnabled(): boolean;

  setStatusWindow(statusWindow: Window_Status): void;

  setItemWindow(itemWindow: Window_EquipItem): void;

  updateHelp(): void;
}
