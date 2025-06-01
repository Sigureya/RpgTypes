import type { Data_Equipment, Damage, Trait, ParamArray } from "src/rpg";

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
  animationId: number;
}
