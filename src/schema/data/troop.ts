import { EventCommand } from "./members";

interface Conditions {
  actorHp: number;
  actorId: number;
}

export interface Page {
  conditions: Conditions;
  list: EventCommand[];
  span: number;
}

export interface Member {
  enemyId: null;
  x: number;
  y: number;
  hidden: boolean;
}

export interface Data_Troop {
  members: Member[];
  pages: Page[];

  id: number;
  name: string;
}
