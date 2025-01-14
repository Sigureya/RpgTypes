export declare const LAST_ACTION: {
    readonly SKILL: 0;
    readonly ITEM: 1;
    readonly ACTOR: 2;
    readonly ENEMY: 3;
    readonly TARGET_ACTOR: 4;
    readonly TARGET_ENEMY: 5;
};
export type LAST_ACTION_TYPES = (typeof LAST_ACTION)[keyof typeof LAST_ACTION];
