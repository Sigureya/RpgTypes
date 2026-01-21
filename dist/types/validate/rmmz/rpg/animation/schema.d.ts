export declare const SCHEMA_DATA_ANIMATION: {
    readonly type: "object";
    readonly required: ("name" | "id" | "offsetX" | "offsetY" | "speed" | "displayType" | "effectName" | "flashTimings" | "rotation" | "scale" | "soundTimings")[];
    readonly properties: {
        name: {
            type: string;
        };
        id: {
            type: string;
            minimum: number;
        };
        effectName: {
            type: string;
        };
        displayType: {
            type: string;
        };
        offsetX: {
            type: string;
        };
        offsetY: {
            type: string;
        };
        scale: {
            type: string;
            minimum: number;
        };
        speed: {
            type: string;
            minimum: number;
        };
        rotation: {
            type: string;
            required: string[];
            properties: {
                x: {
                    type: string;
                };
                y: {
                    type: string;
                };
                z: {
                    type: string;
                };
            };
        };
        soundTimings: {
            type: string;
            items: {
                type: string;
                required: string[];
                properties: {
                    frame: {
                        type: string;
                    };
                    se: {
                        type: string;
                        required: string[];
                        properties: {
                            name: {
                                type: string;
                            };
                            volume: {
                                type: string;
                            };
                            pitch: {
                                type: string;
                            };
                            pan: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
        flashTimings: {
            type: string;
            items: {
                type: string;
                required: string[];
                properties: {
                    frame: {
                        type: string;
                    };
                    duration: {
                        type: string;
                    };
                    color: {
                        type: string;
                        items: {
                            type: string;
                            minimum: number;
                            maximum: number;
                        };
                        minItems: number;
                        maxItems: number;
                    };
                };
            };
        };
    };
};
