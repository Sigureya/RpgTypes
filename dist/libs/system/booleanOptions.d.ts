import { System_BooleanOptions } from './subset';
export declare const makeBooleanOptions: (options?: Partial<System_BooleanOptions>) => System_BooleanOptions;
export declare const SCHEMA_SYSTEM_BOOLEAN_OPTIONS: {
    readonly type: "object";
    readonly additionalProperties: true;
    readonly required: ("optAutosave" | "optDisplayTp" | "optDrawTitle" | "optExtraExp" | "optFloorDeath" | "optFollowers" | "optKeyItemsNumber" | "optSideView" | "optSlipDeath" | "optTransparent" | "optSplashScreen" | "optMessageSkip")[];
    readonly properties: {
        readonly optAutosave: {
            readonly type: "boolean";
        };
        readonly optDisplayTp: {
            readonly type: "boolean";
        };
        readonly optDrawTitle: {
            readonly type: "boolean";
        };
        readonly optExtraExp: {
            readonly type: "boolean";
        };
        readonly optFloorDeath: {
            readonly type: "boolean";
        };
        readonly optFollowers: {
            readonly type: "boolean";
        };
        readonly optKeyItemsNumber: {
            readonly type: "boolean";
        };
        readonly optSideView: {
            readonly type: "boolean";
        };
        readonly optSlipDeath: {
            readonly type: "boolean";
        };
        readonly optTransparent: {
            readonly type: "boolean";
        };
        readonly optMessageSkip: {
            readonly type: "boolean";
        };
        readonly optSplashScreen: {
            readonly type: "boolean";
        };
    };
};
