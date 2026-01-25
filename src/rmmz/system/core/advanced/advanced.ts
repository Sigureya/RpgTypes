export interface System_Advanced {
  gameId: number;
  screenWidth: number;
  screenHeight: number;
  uiAreaWidth: number;
  uiAreaHeight: number;
  windowOpacity: number;
  screenScale: number;

  numberFontFilename: string;
  mainFontFilename: string;
  fallbackFonts: string;
  fontSize: number;

  picturesUpperLimit?: number;
}

export const makeSystemAdvanced = (
  advanced: Partial<System_Advanced> = {},
): System_Advanced => {
  return {
    gameId: advanced.gameId ?? 0,
    screenWidth: advanced.screenWidth ?? 0,
    screenHeight: advanced.screenHeight ?? 0,
    uiAreaWidth: advanced.uiAreaWidth ?? 0,
    uiAreaHeight: advanced.uiAreaHeight ?? 0,
    windowOpacity: advanced.windowOpacity ?? 0,
    screenScale: advanced.screenScale ?? 1,

    numberFontFilename: advanced.numberFontFilename ?? "",
    mainFontFilename: advanced.mainFontFilename ?? "",
    fallbackFonts: advanced.fallbackFonts ?? "",
    fontSize: advanced.fontSize ?? 28,
    picturesUpperLimit: advanced.picturesUpperLimit ?? 100,
  };
};
