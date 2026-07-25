import type { BranchCodeTable } from "./branch";

export interface ParamObject_BranchEnemyByAppear {
  enemyIndex: number;
}

export interface ParamObject_BranchEnemyByState {
  enemyIndex: number;
  stateId: number;
}

export type BranchParam_Enemy = BranchByEnemyAppeared | BranchByEnemyState;

export type BranchByEnemyAppeared = [
  branchCode: BranchCodeTable["ENEMY"],
  enemyIndex: number,
  operandAppear: 0,
];

export type BranchByEnemyState = [
  branchCode: BranchCodeTable["ENEMY"],
  enemyIndex: number,
  operandState: 1,
  stateId: number,
];
