export interface Rmmz_Members<Battler> {
  members(): Battler[];
}

export interface Rmmz_BattlerContainer_Readonly<
  Battler,
> extends Rmmz_Members<Battler> {
  members(): Battler[];
  aliveMembers(): Battler[];
  deadMembers(): Battler[];
  movableMembers(): Battler[];
}

export interface Rmmz_BattlerContainer<
  Battler,
> extends Rmmz_BattlerContainer_Readonly<Battler> {
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
