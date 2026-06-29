export declare const BATTLE_RESULT_WIN = 0;
export declare const BATTLE_RESULT_ESCAPE = 1;
export declare const BATTLE_RESULT_LOSE = 2;
export type BattleResult = typeof BATTLE_RESULT_WIN | typeof BATTLE_RESULT_ESCAPE | typeof BATTLE_RESULT_LOSE;
export interface Process {
    processAbort(): void;
    rocessPartyEscape(): void;
    onEscapeFailure(): void;
    processDefeat(): void;
    onEscapeSuccess(): void;
    processEscape(): void;
    processVictory(): void;
    endBattle(result: BattleResult): void;
    setEventCallback(callback: (result: BattleResult) => void): void;
}
