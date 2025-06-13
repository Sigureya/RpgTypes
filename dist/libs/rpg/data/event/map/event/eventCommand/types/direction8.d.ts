export declare const DIRECTION: {
    readonly LEFT: 4;
    readonly UP: 8;
    readonly DOWN: 2;
    readonly RIGHT: 6;
};
export type Direction8 = (typeof DIRECTION)[keyof typeof DIRECTION];
