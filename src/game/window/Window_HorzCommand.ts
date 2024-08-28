import { Window_Command } from "./Window_Command";
import { TextAlign } from "./types/textAlign";

export declare class Window_HorzCommand<Ext = any> extends Window_Command<Ext> {
  maxCols(): number;

  itemTextAlign(): TextAlign;
}
