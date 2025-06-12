import { JSONSchemaType } from 'ajv';
export declare const SCHEMA_SYSTEM_GAME_EDITOR_BUNDLE: {
    readonly additionalProperties: false;
    readonly type: "object";
    readonly required: readonly ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"];
    readonly properties: {
        readonly testBattlers: {
            readonly type: "array";
            readonly items: {
                readonly additionalProperties: false;
                readonly type: "object";
                readonly required: readonly ["actorId", "equips", "level"];
                readonly properties: {
                    readonly actorId: {
                        readonly type: "integer";
                    };
                    readonly level: {
                        readonly type: "integer";
                        readonly minimum: 1;
                    };
                    readonly equips: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "integer";
                        };
                    };
                };
            };
        };
        readonly testTroopId: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly battleback1Name: {
            readonly type: "string";
        };
        readonly battleback2Name: {
            readonly type: "string";
        };
        readonly editMapId: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly battlerHue: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly battlerName: {
            readonly type: "string";
        };
        readonly editor: JSONSchemaType<import('./editor').EditorSettings>;
    };
};
