import { Rectangle } from "src/types/rectangle";
import { Window_HorzCommand } from "./Window_HorzCommand";

export declare class Window_EquipCommand extends Window_HorzCommand {
  initialize(rect: Rectangle): void;

  maxCols(): number;

  makeCommandList(): void;
}
