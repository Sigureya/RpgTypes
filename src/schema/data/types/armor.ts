import type { Data_Equipment } from "./bases";
import { ParamArray } from "./members";

export interface Data_Armor extends Data_Equipment {
  description: string;
  price: number;
  params: ParamArray;
}
