import { Command_ActorForceAction } from './actor';
import { Command_EnemyForceAction } from './enemy';
export type Command_ForceAction = Command_ActorForceAction | Command_EnemyForceAction;
