export interface BalloonTarget {
    startBalloon(): void;
    endBalloon(): void;
}
export interface BallonRequest {
    target: BalloonTarget;
    balloonId: number;
}
