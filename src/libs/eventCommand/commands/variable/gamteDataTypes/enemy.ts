export interface DataOperand_Enemy {
  get hp(): number;
  get mp(): number;
  get tp(): number;
  param(index: number): number;
}
