import { Rectangle } from "src/types/rectangle";
import { TextAlign } from "./types/TextAlign";

export declare class Window_HorzCommand {
  initialize(rect: Rectangle): void;

  maxCols(): number;

  itemTextAlign(): TextAlign;
}
