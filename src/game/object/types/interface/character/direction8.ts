export const DIRECTION = {
  LEFT: 4 as const,
  UP: 8 as const,
  DOWN: 2 as const,
  RIGHT: 6 as const,
} as const;

export type Direction8 = (typeof DIRECTION)[keyof typeof DIRECTION];
