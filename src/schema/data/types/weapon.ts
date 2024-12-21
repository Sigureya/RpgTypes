import type { Data_Equipment, Trait } from "./bases";
import { ParamArray } from "./members";

export interface Data_Weapon extends Data_Equipment {
  name: string;
  id: number;
  description: string;
  price: number;
  params: ParamArray;
  traits: Trait[];
  note: string;
}
