import { Rectangle } from "src/types/rectangle";
import { IHelpListner } from "./types/HelpListener";
import { Window_Base } from "./Window_Base";

export declare class Window_Help extends Window_Base implements IHelpListner {
  setItem(data: { description: string }): void;
  initialize(rect: Rectangle): void;

  setText(text: string): void;

  clear(): void;

  refresh(): void;
}
