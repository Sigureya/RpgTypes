import { CONTROL_VARIABLES } from "@RpgTypes/rmmz/rpg";
import { OPERAND_GAMEDATA } from "./constants";
import type {
  ParamObject_WritingTarget,
  ParamObject_Operand_Enemy,
  Command_ControlVariables,
  Operand_EnemyStatus,
} from "./types";
import { ENEMY_PARAM_INDEX } from "./types/enemy/dataSource";
import type { MakeOtherParam } from "./types/other";

export const makeCommandVariableFromEnemyData = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Enemy,
  other: MakeOtherParam = {}
): Command_ControlVariables<Operand_EnemyStatus> => {
  return {
    code: CONTROL_VARIABLES,
    indent: other.indent ?? 0,
    parameters: toArrayOperandEnemyStatus(target, value, other.operation ?? 0),
  };
};

export const toArrayOperandEnemyStatus = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Enemy,
  operation: number = 0
): Operand_EnemyStatus => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_GAMEDATA,
  4,
  value.index,
  ENEMY_PARAM_INDEX[value.param],
];
