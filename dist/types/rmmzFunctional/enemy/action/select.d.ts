import { Enemy_Action } from '../../../rmmz';
export interface EnemyActionRandom {
    random(max: number): number;
}
export declare const enemyActionRatingMax: (actions: ReadonlyArray<Enemy_Action>) => number;
export declare const enemyActionRatingZero: (actions: ReadonlyArray<Enemy_Action>, ratingDistance?: number) => number;
export declare const filterEnemyActionsByRating: (actions: ReadonlyArray<Enemy_Action>, ratingZero: number) => Enemy_Action[];
export declare const enemyActionWeightTotal: (actions: ReadonlyArray<Enemy_Action>, ratingZero: number) => number;
export declare const selectEnemyActionByWeight: (actions: ReadonlyArray<Enemy_Action>, ratingZero: number, random: (max: number) => number) => Enemy_Action | null;
export declare const selectEnemyActions: (actions: ReadonlyArray<Enemy_Action>, actionCount: number, random: (max: number) => number, ratingDistance?: number) => (Enemy_Action | null)[];
