// 他のクラスから参照される窓口
// イベントコマンドやシーンから呼び出される
export interface Facade {
  canEscape(): boolean;
  isTurnEnd(): boolean;
  setup(troopId: number, canEscape: boolean, canLose: boolean): void;
  abort(): void;
  onEncounter(): void;
  isActionForced(): boolean;
}
