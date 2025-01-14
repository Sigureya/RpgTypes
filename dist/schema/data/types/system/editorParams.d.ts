interface TestBattlers {
    actorId: number;
    level: number;
    equips: number[];
}
export interface EditerParams {
    editMapId: number;
    testTroopId: number;
    testBattlers: TestBattlers[];
}
export {};
