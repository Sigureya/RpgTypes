import { FORCE_ACTION } from "@RpgTypes/libs";
import type {
  ParamObject_ActorForceAction,
  Command_ActorForceAction,
  Command_EnemyForceAction,
  ParamObject_EnemyForceAction,
  ParamObject_ActorForceActionLastTarget,
  ParamObject_EnemyForceActionLastTarget,
} from "./types";

export const makeCommandForceActionActor = (
  param: ParamObject_ActorForceAction,
  indent: number = 0,
): Command_ActorForceAction => {
  return {
    code: FORCE_ACTION,
    indent,
    parameters: [1, param.actorId, param.skillId, param.targetIndex ?? -1],
  };
};

export const makeCommandForceActionEnemy = (
  param: ParamObject_EnemyForceAction,
  indent: number = 0,
): Command_EnemyForceAction => {
  return {
    code: FORCE_ACTION,
    indent,
    parameters: [0, param.enemyIndex, param.skillId, param.targetIndex ?? -1],
  };
};

export const makeCommandForceActionActorLastTarget = (
  param: ParamObject_ActorForceActionLastTarget,
  indent: number = 0,
): Command_ActorForceAction => {
  return {
    code: FORCE_ACTION,
    indent,
    parameters: [1, param.actorId, param.skillId, -2],
  };
};

export const makeCommandForceActionEnemyLastTarget = (
  param: ParamObject_EnemyForceActionLastTarget,
  indent: number = 0,
): Command_EnemyForceAction => {
  return {
    code: FORCE_ACTION,
    indent,
    parameters: [0, param.enemyIndex, param.skillId, -2],
  };
};
