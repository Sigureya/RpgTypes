declare const SCHEMA_DATA_MAP: {
    readonly type: "object";
    readonly required: ("note" | "bgm" | "battleback1Name" | "battleback2Name" | "x" | "y" | "bgs" | "data" | "parallaxName" | "parallaxLoopX" | "parallaxLoopY" | "parallaxShow" | "parallaxSx" | "parallaxSy" | "width" | "height" | "displayName" | "disableDashing" | "autoplayBgm" | "autoplayBgs")[];
    readonly properties: {
        readonly data: {
            readonly type: "array";
            readonly items: {
                readonly type: "integer";
            };
        };
        readonly battleback1Name: {
            readonly type: "string";
        };
        readonly battleback2Name: {
            readonly type: "string";
        };
        readonly parallaxLoopY: {
            readonly type: "boolean";
        };
        readonly parallaxLoopX: {
            readonly type: "boolean";
        };
        readonly parallaxName: {
            readonly type: "string";
        };
        readonly parallaxShow: {
            readonly type: "boolean";
        };
        readonly parallaxSy: {
            readonly type: "integer";
        };
        readonly parallaxSx: {
            readonly type: "integer";
        };
        readonly x: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly y: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly width: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly height: {
            readonly type: "integer";
            readonly minimum: 0;
        };
        readonly note: {
            readonly type: "string";
        };
        readonly displayName: {
            readonly type: "string";
        };
        readonly disableDashing: {
            readonly type: "boolean";
        };
        readonly autoplayBgm: {
            readonly type: "boolean";
        };
        readonly bgm: {
            readonly type: "object";
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
        readonly autoplayBgs: {
            readonly type: "boolean";
        };
        readonly bgs: {
            readonly type: "object";
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
        readonly encounterList: {
            type: "array";
            items: {
                type: "object";
                required: ("troopId" | "regionSet" | "weight")[];
                properties: {
                    regionSet: {
                        type: "array";
                        items: {
                            type: "integer";
                        };
                    };
                    troopId: {
                        type: "integer";
                    };
                    weight: {
                        type: "integer";
                    };
                };
            };
        };
        readonly events: {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly required: ("name" | "id" | "x" | "y" | "pages")[];
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
                            readonly required: ("conditions" | "directionFix" | "image" | "moveFrequency" | "moveRoute")[];
                            readonly properties: {
                                readonly moveFrequency: {
                                    readonly type: "integer";
                                };
                                readonly directionFix: {
                                    readonly type: "boolean";
                                };
                                readonly conditions: {
                                    readonly type: "object";
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
                                readonly image: {
                                    readonly type: "object";
                                    readonly required: readonly ["characterIndex", "characterName", "direction", "pattern", "tileId"];
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
                            };
                        };
                    };
                };
            };
        };
    };
};
export default SCHEMA_DATA_MAP;
