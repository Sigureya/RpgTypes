import { EventCommandLike2 } from '../../../frame';
import { SHOW_BATTLE_ANIMATION } from '../../../../rpg';
export interface Command_ShowBattleAnimation extends EventCommandLike2<typeof SHOW_BATTLE_ANIMATION> {
    parameters: ParamArray_ShowBattleAnimation;
}
export type ParamArray_ShowBattleAnimation = [
    targetEnemyIndex: number,
    animationId: number,
    forAll: boolean
];
