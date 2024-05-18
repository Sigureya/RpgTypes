import { IBattler } from "./battler";

export interface IUnit<Battler extends IBattler> {
  members(): Battler[];
  inBattle(): boolean;
  agility(): boolean;
  tgrSum(): number;
  randomTarget(): Battler | null;
  randomDeadTarget(): Battler | null;
  smoothTarget(): Battler | undefined;
}
