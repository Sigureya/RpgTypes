import type { Window_Command } from "./Window_Command";
import type { TextAlign } from "./types/";

export declare class Window_HorzCommand<Ext = any> extends Window_Command<Ext> {
  maxCols(): number;

  itemTextAlign(): TextAlign;
}
