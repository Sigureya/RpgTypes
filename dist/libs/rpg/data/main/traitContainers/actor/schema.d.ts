import { Data_Actor } from './types';
export declare const SCHEMA_DATA_ACTOR: {
    readonly type: "object";
    readonly required: readonly ["name", "id", "nickname", "battlerName", "characterName", "characterIndex", "faceName", "faceIndex", "classId", "initialLevel", "maxLevel"];
    readonly properties: {
        readonly name: {
            readonly type: "string";
        };
        readonly battlerName: {
            readonly type: "string";
        };
        readonly characterName: {
            readonly type: "string";
        };
        readonly characterIndex: {
            readonly type: "integer";
        };
        readonly faceName: {
            readonly type: "string";
        };
        readonly faceIndex: {
            readonly type: "integer";
            readonly minimum: 0;
            readonly maximum: 7;
        };
        readonly id: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly nickname: {
            readonly type: "string";
        };
        readonly profile: {
            readonly type: "string";
        };
        readonly initialLevel: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly maxLevel: {
            readonly type: "integer";
        };
        readonly classId: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly equips: {
            readonly type: "array";
            readonly items: {
                readonly type: "integer";
            };
        };
        readonly note: {
            readonly type: "string";
        };
        readonly traits: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly code: {
                        readonly type: "integer";
                    };
                    readonly dataId: {
                        readonly type: "integer";
                    };
                    readonly value: {
                        readonly type: "integer";
                    };
                };
                readonly required: readonly ["code", "dataId", "value"];
            };
        };
    };
};
export declare const normalizeDataActor: (data: Partial<Data_Actor>) => Data_Actor;
