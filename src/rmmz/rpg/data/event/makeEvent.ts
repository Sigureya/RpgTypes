import type { Data_CommonEvent } from "./commonEvent";
import type { Data_Troop, Troop_EventConditions, Troop_Member } from "./troop";

export const makeCommonEventData = (
  data: Partial<Data_CommonEvent> = {}
): Data_CommonEvent => ({
  id: data.id ?? 0,
  name: data.name ?? "",
  trigger: data.trigger ?? 0,
  list: data.list ?? [],
  switchId: data.switchId ?? 0,
});

export const makeTroopData = (data: Partial<Data_Troop> = {}): Data_Troop => ({
  id: data.id ?? 0,
  name: data.name ?? "",
  members: data.members ?? [],
  pages: data.pages ?? [],
});

export const makeTroopMember = (
  data: Partial<Troop_Member> = {}
): Troop_Member => ({
  enemyId: data.enemyId ?? 0,
  x: data.x ?? 0,
  y: data.y ?? 0,
  hidden: data.hidden ?? false,
});

export const makeTroopEventConditions = (
  data: Partial<Troop_EventConditions> = {}
): Troop_EventConditions => ({
  actorHp: data.actorHp ?? 0,
  actorId: data.actorId ?? 0,
  enemyValid: data.enemyValid ?? 0,
  switchValid: data.switchValid ?? 0,
});
