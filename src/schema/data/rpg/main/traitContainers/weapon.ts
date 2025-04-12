import type { Damage } from "../usableItems";
import type { Data_Equipment } from "./equipment";
import type { ParamArray } from "./members";
import type { Trait } from "./trait";

export interface Data_Weapon extends Data_Equipment {
  name: string;
  id: number;
  iconIndex: number;
  description: string;
  price: number;
  params: ParamArray;
  traits: Trait[];
  note: string;
  wtypeId: number;
  etypeId: number;
  damage: Damage;
}
