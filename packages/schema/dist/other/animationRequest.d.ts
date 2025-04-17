export interface AnimationTarget {
    startAnimation(): void;
    endAnimation(): void;
}
export interface AnimationRequest<T extends AnimationTarget> {
    animationId: number;
    mirror: boolean;
    targets: T[];
}
