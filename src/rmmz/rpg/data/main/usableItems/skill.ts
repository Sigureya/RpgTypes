import { makeDamage } from "../members";
import type { Data_Skill } from "./core";

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
