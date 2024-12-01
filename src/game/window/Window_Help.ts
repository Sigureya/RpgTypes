import type { IHelpListner } from "./types/HelpListener";
import type { Window_Base } from "./Window_Base";

export declare class Window_Help extends Window_Base implements IHelpListner {
  setItem(data: { description: string }): void;

  setText(text: string): void;

  clear(): void;

  refresh(): void;
}
