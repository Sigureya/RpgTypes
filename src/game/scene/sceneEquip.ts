import type { Rectangle } from "../window";
import type { Scene_MenuBase } from "./SceneMenuBase";

export declare class Scene_Equip extends Scene_MenuBase {
  createStatusWindow(): void;
  statusWindowRect(): Rectangle;
  createCommandWindow(): void;
  commandWindowRect(): Rectangle;
  createSlotWindow(): void;
  slotWindowRect(): Rectangle;
  createItemWindow(): void;
  itemWindowRect(): Rectangle;
  statusWidth(): number;
  needsPageButtons(): boolean;
  arePageButtonsEnabled(): boolean;
  refreshActor(): void;
  commandEquip(): void;
  commandOptimize(): void;
  commandClear(): void;
  onSlotOk(): void;
  onSlotCancel(): void;
  onItemOk(): void;
  executeEquipChange(): void;
  onItemCancel(): void;
  nActorChange(): void;
  hideItemWindow(): void;
}
