import type { Picture_EasingFn } from "./types";

export const easeIn = (t: number, exponent: number): number =>
  Math.pow(t, exponent);

export const easeOut = (t: number, exponent: number): number =>
  1 - Math.pow(1 - t, exponent);

export const easeInOut = (t: number, exponent: number): number =>
  t < 0.5 ? easeIn(t * 2, exponent) / 2 : easeOut(t * 2 - 1, exponent) / 2 + 0.5;

export const linearEasing: Picture_EasingFn = (t) => t;
