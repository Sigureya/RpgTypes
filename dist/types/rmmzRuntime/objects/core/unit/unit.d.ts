import { Rmmz_UnitTpb } from './tpb';
export interface Rmmz_Unit<Battler> extends Rmmz_UnitTpb {
    tpbBaseSpeed(): number;
    tpbReferenceTime(): number;
    updateTpb(): void;
    substituteBattler(): Battler | null;
    select(activeMember: Battler): void;
    randomTarget(): Battler | null;
    randomDeadTarget(): Battler | null;
    smoothTarget(): Battler | undefined;
    deadMembers(): Battler[];
    movableMembers(): Battler[];
    aliveMembers(): Battler[];
    smoothDeadTarget(): Battler | undefined;
    members(): Battler[];
    inBattle(): boolean;
    agility(): boolean;
    tgrSum(): number;
    isAllDead(): boolean;
}
