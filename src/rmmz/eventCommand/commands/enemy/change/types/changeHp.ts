import type {
  EventCommandLike,
  CHANGE_ENEMY_HP,
} from "@RpgTypes/libs/eventCommand";
import type { ParamObject_ChangeEnemyValueBase } from "./value";

export interface Command_ChangeEnemyHP extends EventCommandLike<
  typeof CHANGE_ENEMY_HP
> {
  parameters: ParamArray_ChangeEnemyHP;
}

export interface ParamObject_ChangeEnemyHp extends ParamObject_ChangeEnemyValueBase {
  allowDeath: boolean;
}

export type ParamArray_ChangeEnemyHP = [
  index: number,
  operation: 1 | 0,
  valueType: 1 | 0,
  value: number,
  allowDeath: boolean,
];
