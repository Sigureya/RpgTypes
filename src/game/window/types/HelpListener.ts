import type { IDisplay } from "./IDisplay";

export interface IHelpListner extends IDisplay {
  setItem(data: { description: string }): void;
  setText(text: string): void;
}
