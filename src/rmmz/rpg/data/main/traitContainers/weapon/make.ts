import { makeDamage } from "../../members";
import type { Data_Weapon } from "./weapon";

export const makeWeaponData = (
  weapon: Partial<Data_Weapon> = {}
): Data_Weapon => ({
  id: weapon.id ?? 0,
  name: weapon.name ?? "",
  iconIndex: weapon.iconIndex ?? 0,
  description: weapon.description ?? "",
  traits: weapon.traits ?? [],
  note: weapon.note ?? "",
  animationId: weapon.animationId ?? 0,
  params: weapon.params ?? [
    0, // maxhp
    0, // maxmp
    0, // atk
    0, // def
    0, // mat
    0, // mdf
    0, // agi
    0, // luk
  ],
  etypeId: weapon.etypeId ?? 0,
  price: weapon.price ?? 0,
  damage: makeDamage(weapon.damage ?? {}),
  wtypeId: weapon.wtypeId ?? 0,
});
