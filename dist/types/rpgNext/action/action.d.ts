import { Rmmz_Battler, Rmmz_Action } from '../../rmmzRuntime';
export declare const actionDecideRandomTarget: <B1 extends Rmmz_Battler, B2 extends Rmmz_Battler>(action: Rmmz_Action, friendsUnit: ReadonlyArray<B1>, opponentsUnit: ReadonlyArray<B2>, randomValue: number) => B1 | B2 | null;
export declare const actionTargetsForOpponents: (action: Rmmz_Action) => Rmmz_Battler[];
