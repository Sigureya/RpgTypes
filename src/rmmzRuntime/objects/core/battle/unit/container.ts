export interface Rmmz_BattlerContainer<Battler> {
  inBattle(): boolean;
  members(): Battler[];
  aliveMembers(): Battler[];
  deadMembers(): Battler[];
  movableMembers(): Battler[];
  clearActions(): void;
  agility(): number;
  tgrSum(): number;
  randomTarget(): Battler | null;
  randomDeadTarget(): Battler | null;
  smoothTarget(): Battler | undefined;
  clearResults(): void;
  onBattleStart(advantageous: unknown): void;
  onBattleEnd(): void;
  makeActions(): void;
  select(activeMember: Battler): void;
  isAllDead(): boolean;
  substituteBattler(): Battler | null;
  smoothDeadTarget(): Battler | undefined;
}
