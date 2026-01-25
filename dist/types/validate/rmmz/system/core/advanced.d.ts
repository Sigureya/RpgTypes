export declare const SCHEMA_SYSTEM_ADVANCED: {
    readonly type: "object";
    readonly properties: {
        readonly gameId: {
            readonly type: "integer";
        };
        readonly screenWidth: {
            readonly type: "integer";
        };
        readonly screenHeight: {
            readonly type: "integer";
        };
        readonly uiAreaWidth: {
            readonly type: "integer";
        };
        readonly uiAreaHeight: {
            readonly type: "integer";
        };
        readonly windowOpacity: {
            readonly type: "integer";
        };
        readonly screenScale: {
            readonly type: "number";
        };
        readonly numberFontFilename: {
            readonly type: "string";
        };
        readonly mainFontFilename: {
            readonly type: "string";
        };
        readonly fallbackFonts: {
            readonly type: "string";
        };
        readonly fontSize: {
            readonly type: "integer";
        };
        readonly picturesUpperLimit: {
            readonly type: "integer";
            readonly nullable: true;
        };
    };
    readonly required: readonly ["gameId", "screenWidth", "screenHeight", "uiAreaWidth", "uiAreaHeight", "windowOpacity", "screenScale", "numberFontFilename", "mainFontFilename", "fallbackFonts", "fontSize"];
    readonly additionalProperties: false;
};
