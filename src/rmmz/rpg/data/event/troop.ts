import type { EventCommandUnknown } from "@RpgTypes/rmmz/eventCommand";

export interface Data_TroopUnknonw<Command = EventCommandUnknown> {
  members: Troop_Member[];
  pages: BattleEventPage<Command>[];

  id: number;
  name: string;
}

export interface BattleEventPage<Command = EventCommandUnknown> {
  conditions: Troop_EventConditions;
  list: Command[];
  span: number;
}

export interface Troop_EventConditions {
  actorHp: number;
  actorId: number;
  enemyValid: number;
  switchValid: number;
}

export interface Troop_Member {
  enemyId: number;
  x: number;
  y: number;
  hidden: boolean;
}
