import { Rectangle } from "src/types/rectangle";
import { Data_NamedItem } from "../data/item/namedItem";
import { IHelpListner } from "./types/HelpListener";
import { Window_Base } from "./Window_Base";

export declare class Window_Help extends Window_Base implements IHelpListner {
  initialize(rect: Rectangle): void;

  setText(text: string): void;

  clear(): any;

  setItem(item: Data_NamedItem): void;

  refresh(): void;
}
