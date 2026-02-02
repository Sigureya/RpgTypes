export interface Rmmz_InterpreterListener {
    requestAnimation(targets: ReadonlyArray<AnimationTarget>, animationId: number, mirror?: boolean): void;
    requestBalloon(target: BalloonTarget, balloonId: number): void;
}
export interface BalloonTarget {
    startBalloon?(): void;
}
export interface AnimationTarget {
    startAnimation?(): void;
}
