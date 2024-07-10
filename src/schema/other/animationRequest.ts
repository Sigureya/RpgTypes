export interface AnimationRequest<T> {
  animationId: number;
  mirror: boolean;
  target: T;
}
