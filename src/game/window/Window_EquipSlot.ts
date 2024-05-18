import { Rectangle } from "src/types/rectangle";
import { Game_Actor } from "../object/battler";
import { Window_Status } from "./src";
import { Window_StatusBase } from "./Window_StatusBase";
import { Window_EquipItem } from "./Window_EquipItem";

export declare class Window_EquipSlot extends Window_StatusBase {
  initialize(rect: Rectangle): void;

  setActor(actor: Game_Actor): void;

  update(): void;

  maxItems(): number;

  item(): void;

  itemAt(index: number): void;

  drawItem(index: number): void;

  slotNameWidth(): number;

  isEnabled(index: number): boolean;

  isCurrentItemEnabled(): boolean;

  setStatusWindow(statusWindow: Window_Status): void;

  setItemWindow(itemWindow: Window_EquipItem): void;

  updateHelp(): void;
}
