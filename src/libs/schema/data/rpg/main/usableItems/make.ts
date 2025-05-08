import type { Data_Item, Data_Skill } from "@RpgTypes/schema";
import { makeDamage } from "@RpgTypes/schema";

export const makeItemData = (item: Partial<Data_Item> = {}): Data_Item => ({
  animationId: item.animationId ?? 0,
  id: item.id ?? 0,
  name: item.name ?? "",
  iconIndex: item.iconIndex ?? 0,
  description: item.description ?? "",

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

export const makeSkillData = (skill: Partial<Data_Skill> = {}): Data_Skill => ({
  stypeId: skill.stypeId ?? 0,
  requiredWtypeId1: skill.requiredWtypeId1 ?? 0,
  requiredWtypeId2: skill.requiredWtypeId2 ?? 0,
  animationId: skill.animationId ?? 0,
  damage: makeDamage(skill.damage ?? {}),
  description: skill.description ?? "",
  effects: [],
  hitType: skill.hitType ?? 0,
  iconIndex: skill.iconIndex ?? 0,
  id: skill.id ?? 0,
  message1: skill.message1 ?? "",
  message2: skill.message2 ?? "",
  messageType: skill.messageType ?? 0,
  name: skill.name ?? "",
  note: skill.note ?? "",
  mpCost: skill.mpCost ?? 0,
  occasion: skill.occasion ?? 0,
  repeats: skill.repeats ?? 0,
  scope: skill.scope ?? 0,
  speed: skill.speed ?? 0,
  successRate: skill.successRate ?? 0,
  tpCost: skill.tpCost ?? 0,
  tpGain: skill.tpGain ?? 0,
});
