import type { EventCommand } from "./map";
import type { Troop_EventConditions, Troop_Member } from "./troopMembers";
export interface BattleEventPage {
  conditions: Troop_EventConditions;
  list: EventCommand[];
  span: number;
}

export interface Data_Troop {
  members: Troop_Member[];
  pages: BattleEventPage[];

  id: number;
  name: string;
}
