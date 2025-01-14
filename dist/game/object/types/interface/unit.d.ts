import type { IBattler } from "./battler";
export interface IUnit<Battler extends IBattler> {
    members(): Battler[];
    randomTarget(): Battler | null;
    randomDeadTarget(): Battler | null;
    smoothTarget(index: number): Battler | undefined;
    smoothDeadTarget(): Battler | undefined;
    deadMembers(): Battler[];
    movableMembers(): Battler[];
    aliveMembers(): Battler[];
    substituteBattler(): Battler | null;
    select(activeMember: Battler): void;
}
