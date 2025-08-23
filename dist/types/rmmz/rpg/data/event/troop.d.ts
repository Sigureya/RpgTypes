import { EventCommand } from './map/event/page';
export interface Data_Troop<Command = EventCommand> {
    members: Troop_Member[];
    pages: BattleEventPage<Command>[];
    id: number;
    name: string;
}
export interface BattleEventPage<Command = EventCommand> {
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
