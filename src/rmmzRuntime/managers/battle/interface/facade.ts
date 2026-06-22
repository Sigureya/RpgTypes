// 他のクラスから参照される窓口
// イベントコマンドやシーンから呼び出される
export interface Facade {
  setup(troopId: number, canEscape: boolean, canLose: boolean): void;
  abort(): void;
  onEncounter(): void;
}

export interface Rmmz_BattleManager_State {
  canEscape(): boolean;
  isTurnEnd(): boolean;
  isActionForced(): boolean;
}
