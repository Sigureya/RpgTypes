import type { Direction8 } from "./direction8";
export interface IMoveRouteExecter {
    processRouteEnd(): void;
    moveStraight(d: Direction8): void;
    moveDiagonally(horz: Direction8, vert: Direction8): void;
    moveRandom(): void;
    moveTowardPlayer(): void;
    moveAwayFromPlayer(): void;
    moveForward(): void;
    moveBackward(): void;
    jump(x: number, y: number): void;
    setDirection(d: Direction8): void;
    turnRight90(): void;
    turnLeft90(): void;
    turn180(): void;
    turnRandom(): void;
    turnTowardPlayer(): void;
    turnAwayFromPlayer(): void;
    setMoveSpeed(speed: number): void;
    setWalkAnime(value: boolean): void;
    setStepAnime(value: boolean): void;
    setDirectionFix(value: boolean): void;
}
