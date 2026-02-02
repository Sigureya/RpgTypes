import type { EventCommandLike, SHAKE_SCREEN } from "@RpgTypes/rmmz";

export interface Command_ShakeScreen extends EventCommandLike<
  typeof SHAKE_SCREEN
> {
  parameters: ParamArray_ShakeScreen;
}

export type ParamArray_ShakeScreen = [
  power: number,
  speed: number,
  duration: number,
  wait: boolean,
];
