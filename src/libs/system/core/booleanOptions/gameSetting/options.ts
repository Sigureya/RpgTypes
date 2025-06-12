import type { System_BooleanOptionsRMMMZ } from "./types";

export const makeBooleanOptions = (
  options: Partial<System_BooleanOptionsRMMMZ> = {}
): System_BooleanOptionsRMMMZ => {
  return {
    optAutosave: options.optAutosave ?? true,
    optDisplayTp: options.optDisplayTp ?? true,
    optDrawTitle: options.optDrawTitle ?? true,
    optExtraExp: options.optExtraExp ?? true,
    optFloorDeath: options.optFloorDeath ?? true,
    optFollowers: options.optFollowers ?? true,
    optKeyItemsNumber: options.optKeyItemsNumber ?? true,
    optSideView: options.optSideView ?? true,
    optSlipDeath: options.optSlipDeath ?? true,
    optTransparent: options.optTransparent ?? true,
    optMessageSkip: options.optMessageSkip ?? true,
    optSplashScreen: options.optSplashScreen ?? true,
  } satisfies Record<keyof System_BooleanOptionsRMMMZ, boolean>;
};
