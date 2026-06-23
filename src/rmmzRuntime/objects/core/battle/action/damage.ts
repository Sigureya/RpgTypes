export interface Rmmz_Action_Damage<Battler> {
  makeDamageValue(target: Battler, critical: boolean): number;
  evalDamageFormula(target: Battler): number;
  calcElementRate(target: Battler): number;
  elementsMaxRate(target: Battler, elements: ReadonlyArray<number>): number;
  applyCritical(damage: number): number;
  applyVariance(damage: number, variance: number): number;
  applyGuard(damage: number, target: Battler): number;
  executeDamage(target: Battler, value: number): void;
  executeHpDamage(target: Battler, value: number): void;
  executeMpDamage(target: Battler, value: number): void;
  gainDrainedHp(value: number): void;
  gainDrainedMp(value: number): void;
  makeSuccess(target: Battler): void;
  apply(target: Battler): void;
}
