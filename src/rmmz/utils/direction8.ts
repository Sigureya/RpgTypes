export const DIRECTION = {
  LEFT: 4,
  UP: 8,
  DOWN: 2,
  RIGHT: 6,
} as const;
export type Direction8 = (typeof DIRECTION)[keyof typeof DIRECTION];
