import { EventCommand } from './map';
export interface Data_Troop {
    members: Troop_Member[];
    pages: BattleEventPage[];
    id: number;
    name: string;
}
export interface BattleEventPage {
    conditions: Troop_EventConditions;
    list: EventCommand[];
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
