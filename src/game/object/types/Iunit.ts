import { IBattler } from "./battler";

export interface IUnit<Battler extends IBattler> {
  members(): Battler[];
  randomTarget(): Battler | null;
  randomDeadTarget(): Battler | null;
  smoothTarget(): Battler | undefined;
  smoothDeadTarget(): Battler | undefined;
  deadMembers(): Battler[];
  movableMembers(): Battler[];
  aliveMembers(): Battler[];
}
