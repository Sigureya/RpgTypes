import { makeDamage } from "../members";
import type { Data_Item } from "./core";

export const makeItemData = (item: Partial<Data_Item> = {}): Data_Item => ({
  animationId: item.animationId ?? 0,
  id: item.id ?? 0,
  name: item.name ?? "",
  iconIndex: item.iconIndex ?? 0,
  description: item.description ?? "",
  itypeId: item.itypeId ?? 0,

  note: item.note ?? "",
  consumable: item.consumable ?? false,
  scope: item.scope ?? 0,
  occasion: item.occasion ?? 0,
  speed: item.speed ?? 0,
  successRate: item.successRate ?? 0,
  repeats: item.repeats ?? 0,
  tpGain: item.tpGain ?? 0,
  hitType: item.hitType ?? 0,
  damage: makeDamage(item.damage ?? {}),
  effects: [],
  price: 0,
});
