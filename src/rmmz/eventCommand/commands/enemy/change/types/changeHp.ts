import type {
  EventCommandLike,
  CHANGE_ENEMY_HP,
} from "@RpgTypes/libs/eventCommand";
import type { Operand } from "./operand";

export interface Command_ChangeEnemyHP extends EventCommandLike<
  typeof CHANGE_ENEMY_HP
> {
  parameters: ParamArray_ChangeEnemyHP;
}

export interface ParamObject_ChangeEnemyHpEx {
  enemyIndex: number;
  allowDeath: boolean;
  operand: Operand;
}

export interface ParamObject_ChangeEnemyHpDirect {
  enemyIndex: number;
  allowDeath: boolean;
  value: number;
}

export interface ParamObject_ChangeEnemyHp {
  enemyIndex: number;
  allowDeath: boolean;
  targetVariableId: number;
  valueVariableId: number;
}

export type ParamArray_ChangeEnemyHP =
  | ParamArray_ChangeEnemyHpRecover
  | ParamArray_ChangeEnemyHpDamage
  | ParamArray_ChangeEnemyHpRecoverDitrcy
  | ParamArray_ChangeEnemyHpDamageDirect;

export type ParamArray_ChangeEnemyHpRecover = [
  targetType: 1,
  index: number,
  operation: 1,
  valueType: number,
  value: number,
  allowDeath: boolean,
];

export type ParamArray_ChangeEnemyHpDamage = [
  targetType: 1,
  index: number,
  operation: 0,
  valueType: number,
  value: number,
  allowDeath: boolean,
];

export type ParamArray_ChangeEnemyHpRecoverDitrcy = [
  targetType: 0,
  index: number,
  operation: 1,
  valueType: number,
  value: number,
  allowDeath: boolean,
];

export type ParamArray_ChangeEnemyHpDamageDirect = [
  targetType: 0,
  index: number,
  operationAdd: 0,
  valueType: number,
  value: number,
  allowDeath: boolean,
];
