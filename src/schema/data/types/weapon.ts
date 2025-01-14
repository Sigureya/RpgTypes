import type { Damage, Data_Equipment, ParamArray, Trait } from "./bases";

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
