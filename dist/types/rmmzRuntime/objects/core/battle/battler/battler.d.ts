import { Rmmz_BattlerBase } from './base';
export interface Rmmz_Battler extends Rmmz_BattlerBase {
    gainHp(value: number, allowDeath?: boolean): void;
    gainMp(value: number): void;
    gainTp(value: number): void;
    loseHp(value: number): void;
    loseMp(value: number): void;
    loseTp(value: number): void;
    performCollapse(): void;
    clearResult(): void;
    recoverAll(): void;
}
