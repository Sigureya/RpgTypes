export interface TestBattler {
  actorId: number;
  level: number;
  equips: number[];
}

export interface System_TestPlay {
  testBattlers: TestBattler[];
  testTroopId: number;
}
