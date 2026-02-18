export interface System_TestBattle {
    testBattlers: TestBattler[];
    testTroopId: number;
    battleback1Name: string;
    battleback2Name: string;
}
export interface TestBattler {
    actorId: number;
    level: number;
    equips: number[];
}
