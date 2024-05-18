import { Game_Battler } from "../battler";

export interface IUnit<Battler extends Game_Battler> {
  members(): Battler[];
  inBattle(): boolean;
  agility(): boolean;
  tgrSum(): number;
  randomTarget(): Battler | null;
  randomDeadTarget(): Battler | null;
  smoothTarget(): Battler | undefined;
}
