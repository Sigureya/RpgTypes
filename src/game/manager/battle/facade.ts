interface BattleFacade {
  canEscape(): boolean;
  isTurnEnd(): boolean;
  setup(troopId: number, canEscape: boolean, canLose: boolean): void;
  abort(): void;
  onEncounter(): void;
  isActionForced(): boolean;
}
