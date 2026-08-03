export interface ActionResultBase {
    missed: boolean;
    evaded: boolean;
    code: number;
}
export interface ActionResult_Damage extends ActionResultBase {
    code: typeof ACTION_HP_DAMAGE;
    hpDamage: number;
}
export interface ActionResult_AddActorVariable extends ActionResultBase {
    code: typeof ACTION_ADD_ACTOR_VARIABLE;
    key: string;
    value: number;
}
export declare const ACTION_HP_DAMAGE: 1;
export declare const ACTION_ADD_ACTOR_VARIABLE: 101;
export interface BattlerInstance<T> {
    hp: number;
    mp: number;
    tp: number;
    variables: T;
}
