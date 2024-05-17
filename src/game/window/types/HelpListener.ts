import { Data_NamedItem } from "src/game/data/item/namedItem";
import { IDisplay } from "./IDisplay";

export interface IHelpListner extends IDisplay {
  setItem(data: Data_NamedItem): void;
  setText(text: string): void;
}
