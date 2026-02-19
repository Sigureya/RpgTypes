import type { EventCommandUnknown } from "@RpgTypes/libs/eventCommand";
import type { Data_CommonEventUnknown } from "./commonEvent";
import type {
  BattleEventPage,
  Data_TroopUnknonw,
  Troop_BattleEventPageSegment,
  Troop_EventConditions,
  Troop_Member,
} from "./troop";

export const makeCommonEventData = <Command extends EventCommandUnknown>(
  data: Partial<Data_CommonEventUnknown<Command>> = {},
): Data_CommonEventUnknown<Command> => ({
  id: data.id ?? 0,
  name: data.name ?? "",
  trigger: data.trigger ?? 0,
  list: data.list ?? [],
  switchId: data.switchId ?? 0,
});

export const makeTroopData = <Command extends EventCommandUnknown>(
  data: Partial<Data_TroopUnknonw<Command>> = {},
): Data_TroopUnknonw<Command> => ({
  id: data.id ?? 0,
  name: data.name ?? "",
  members: data.members ?? [],
  pages: data.pages ?? [],
});

export const makeBattleEventPage = <Command extends EventCommandUnknown>(
  page: Troop_BattleEventPageSegment<Command>,
): BattleEventPage<Command> => ({
  span: page.span ?? 0,
  conditions: makeTroopEventConditions(page.conditions ?? {}),
  list: page.list ?? [],
});

export const makeTroopMember = (
  data: Partial<Troop_Member> = {},
): Troop_Member => ({
  enemyId: data.enemyId ?? 0,
  x: data.x ?? 0,
  y: data.y ?? 0,
  hidden: data.hidden ?? false,
});

export const makeTroopEventConditions = (
  data: Partial<Troop_EventConditions> = {},
): Troop_EventConditions => ({
  actorHp: data.actorHp ?? 0,
  actorId: data.actorId ?? 0,
  enemyValid: data.enemyValid ?? 0,
  switchValid: data.switchValid ?? 0,
});
