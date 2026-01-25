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
export declare const makeSystemAdvanced: (advanced?: Partial<System_Advanced>) => System_Advanced;
