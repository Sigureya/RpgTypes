import { EventCommand } from './map';
export interface Conditions {
    actorHp: number;
    actorId: number;
}
export interface BattleEventPage {
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
    pages: BattleEventPage[];
    id: number;
    name: string;
}
