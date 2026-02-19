export declare const SCHEMA_DATA_MAP: {
    readonly type: "object";
    readonly additionalProperties: false;
    readonly $defs: {
        readonly AudioFileParams: {
            readonly type: "object";
            readonly additionalProperties: false;
            readonly required: readonly ["name", "pan", "pitch", "volume"];
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                };
                readonly pan: {
                    readonly type: "integer";
                };
                readonly pitch: {
                    readonly type: "integer";
                };
                readonly volume: {
                    readonly type: "integer";
                };
            };
        };
        readonly EncounterList: {
            readonly type: "array";
            readonly items: {
                readonly additionalProperties: false;
                readonly type: "object";
                readonly required: readonly ["regionSet", "troopId", "weight"];
                readonly properties: {
                    readonly regionSet: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "integer";
                        };
                    };
                    readonly troopId: {
                        readonly type: "integer";
                    };
                    readonly weight: {
                        readonly type: "integer";
                    };
                };
            };
        };
        readonly MapEvents: {
            readonly type: "array";
            readonly items: {
                readonly oneOf: readonly [{
                    readonly type: "null";
                }, {
                    readonly type: "object";
                    readonly required: ("name" | "id" | "note" | "x" | "y" | "pages")[];
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly x: {
                            readonly type: "integer";
                        };
                        readonly y: {
                            readonly type: "integer";
                        };
                        readonly note: {
                            readonly type: "string";
                        };
                        readonly pages: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: false;
                                readonly required: readonly ["conditions", "image", "list", "moveRoute", "directionFix", "priorityType", "moveFrequency", "walkAnime", "stepAnime", "through", "moveSpeed", "moveType", "trigger"];
                                readonly properties: {
                                    readonly priorityType: {
                                        readonly type: "integer";
                                    };
                                    readonly directionFix: {
                                        readonly type: "boolean";
                                    };
                                    readonly moveFrequency: {
                                        readonly type: "integer";
                                    };
                                    readonly conditions: {
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                        readonly required: readonly ["switch1Id", "switch1Valid", "switch2Id", "switch2Valid", "variableId", "variableValid", "selfSwitchCh", "selfSwitchValid", "variableValue", "itemId", "itemValid", "actorId", "actorValid"];
                                        readonly properties: {
                                            readonly switch1Id: {
                                                readonly type: "integer";
                                                readonly minimum: 0;
                                            };
                                            readonly switch1Valid: {
                                                readonly type: "boolean";
                                            };
                                            readonly switch2Id: {
                                                readonly type: "integer";
                                                readonly minimum: 0;
                                            };
                                            readonly switch2Valid: {
                                                readonly type: "boolean";
                                            };
                                            readonly variableId: {
                                                readonly type: "integer";
                                                readonly minimum: 0;
                                            };
                                            readonly variableValid: {
                                                readonly type: "boolean";
                                            };
                                            readonly selfSwitchCh: {
                                                readonly type: "string";
                                            };
                                            readonly selfSwitchValid: {
                                                readonly type: "boolean";
                                            };
                                            readonly variableValue: {
                                                readonly type: "integer";
                                            };
                                            readonly itemId: {
                                                readonly type: "integer";
                                                readonly minimum: 0;
                                            };
                                            readonly itemValid: {
                                                readonly type: "boolean";
                                            };
                                            readonly actorId: {
                                                readonly type: "integer";
                                            };
                                            readonly actorValid: {
                                                readonly type: "boolean";
                                            };
                                        };
                                    };
                                    readonly list: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly additionalProperties: false;
                                            readonly type: "object";
                                            readonly required: readonly ["code", "parameters", "indent"];
                                            readonly properties: {
                                                readonly code: {
                                                    readonly type: "integer";
                                                };
                                                readonly indent: {
                                                    readonly type: "integer";
                                                };
                                                readonly parameters: {
                                                    readonly type: "array";
                                                    readonly items: {};
                                                };
                                            };
                                        };
                                    };
                                    readonly stepAnime: {
                                        readonly type: "boolean";
                                    };
                                    readonly walkAnime: {
                                        readonly type: "boolean";
                                    };
                                    readonly through: {
                                        readonly type: "boolean";
                                    };
                                    readonly image: {
                                        readonly type: "object";
                                        readonly required: readonly ["characterIndex", "characterName", "direction", "pattern", "tileId"];
                                        readonly additionalProperties: false;
                                        readonly properties: {
                                            readonly characterIndex: {
                                                readonly type: "integer";
                                                readonly minimum: 0;
                                            };
                                            readonly characterName: {
                                                readonly type: "string";
                                            };
                                            readonly direction: {
                                                readonly type: "integer";
                                                readonly enum: readonly [2, 4, 6, 8];
                                            };
                                            readonly pattern: {
                                                readonly type: "integer";
                                            };
                                            readonly tileId: {
                                                readonly type: "integer";
                                            };
                                        };
                                    };
                                    readonly moveRoute: {
                                        readonly type: "object";
                                        readonly additionalProperties: false;
                                        readonly required: readonly ["wait", "repeat", "skippable", "list"];
                                        readonly properties: {
                                            readonly wait: {
                                                readonly type: "boolean";
                                            };
                                            readonly repeat: {
                                                readonly type: "boolean";
                                            };
                                            readonly skippable: {
                                                readonly type: "boolean";
                                            };
                                            readonly list: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly additionalProperties: false;
                                                    readonly type: "object";
                                                    readonly required: readonly ["code", "parameters"];
                                                    readonly properties: {
                                                        readonly code: {
                                                            readonly type: "integer";
                                                        };
                                                        readonly parameters: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly oneOf: readonly [{
                                                                    readonly type: "string";
                                                                }, {
                                                                    readonly type: "number";
                                                                }, {
                                                                    type: "object";
                                                                    additionalProperties: false;
                                                                    required: ("name" | "volume" | "pitch" | "pan")[];
                                                                    properties: {
                                                                        name: {
                                                                            type: "string";
                                                                        };
                                                                        pan: {
                                                                            type: "integer";
                                                                        };
                                                                        pitch: {
                                                                            type: "integer";
                                                                        };
                                                                        volume: {
                                                                            type: "integer";
                                                                        };
                                                                    };
                                                                }];
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly moveSpeed: {
                                        readonly type: "integer";
                                    };
                                    readonly moveType: {
                                        readonly type: "integer";
                                    };
                                    readonly trigger: {
                                        readonly type: "integer";
                                    };
                                };
                            };
                        };
                    };
                }];
            };
        };
    };
    readonly required: ("note" | "bgm" | "battleback1Name" | "battleback2Name" | "tilesetId" | "bgs" | "data" | "parallaxName" | "specifyBattleback" | "parallaxLoopX" | "parallaxLoopY" | "parallaxShow" | "parallaxSx" | "parallaxSy" | "width" | "height" | "displayName" | "disableDashing" | "autoplayBgm" | "autoplayBgs" | "scrollType" | "encounterStep" | "encounterList" | "events")[];
    readonly properties: {
        data: {
            type: string;
            items: {
                type: string;
            };
        };
        battleback1Name: {
            type: string;
        };
        battleback2Name: {
            type: string;
        };
        parallaxLoopY: {
            type: string;
        };
        parallaxLoopX: {
            type: string;
        };
        parallaxName: {
            type: string;
        };
        parallaxShow: {
            type: string;
        };
        parallaxSy: {
            type: string;
        };
        parallaxSx: {
            type: string;
        };
        tilesetId: {
            type: string;
        };
        width: {
            type: string;
            minimum: number;
        };
        height: {
            type: string;
            minimum: number;
        };
        note: {
            type: string;
        };
        displayName: {
            type: string;
        };
        disableDashing: {
            type: string;
        };
        autoplayBgm: {
            type: string;
        };
        bgm: {
            $ref: string;
        };
        autoplayBgs: {
            type: string;
        };
        bgs: {
            $ref: string;
        };
        encounterList: {
            $ref: string;
        };
        events: {
            $ref: string;
        };
        encounterStep: {
            type: string;
        };
        scrollType: {
            type: string;
        };
        specifyBattleback: {
            type: string;
        };
    };
};
