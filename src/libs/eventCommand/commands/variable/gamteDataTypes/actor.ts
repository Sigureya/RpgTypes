export interface DataOperand_Actor {
  get level(): number;
  get actorId(): number;
  get hp(): number;
  get mp(): number;
  get tp(): number;
  param(index: number): number;
  currentExp(): number;
}
