import { ParamObject_ActorForceAction, Command_ActorForceAction, Command_EnemyForceAction, ParamObject_EnemyForceAction, ParamObject_ActorForceActionLastTarget, ParamObject_EnemyForceActionLastTarget } from './types';
export declare const makeCommandForceActionActor: (param: ParamObject_ActorForceAction, indent?: number) => Command_ActorForceAction;
export declare const makeCommandForceActionEnemy: (param: ParamObject_EnemyForceAction, indent?: number) => Command_EnemyForceAction;
export declare const makeCommandForceActionActorLastTarget: (param: ParamObject_ActorForceActionLastTarget, indent?: number) => Command_ActorForceAction;
export declare const makeCommandForceActionEnemyLastTarget: (param: ParamObject_EnemyForceActionLastTarget, indent?: number) => Command_EnemyForceAction;
