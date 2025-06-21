import { KindOfNumber, KindOfNumberArray } from './core/primitiveParams';
export declare const compileNumberField: (data: KindOfNumber) => {
    description?: string | undefined;
    title?: string | undefined;
    default: number;
    type: "number" | "integer";
} | {
    description?: string | undefined;
    title?: string | undefined;
    default?: undefined;
    type: "number" | "integer";
};
export declare const compileNumberArrayField: (data: KindOfNumberArray) => {
    description?: string | undefined;
    title?: string | undefined;
    default: number[];
    type: "array";
    items: {
        type: "number" | "integer";
    };
} | {
    description?: string | undefined;
    title?: string | undefined;
    default?: undefined;
    type: "array";
    items: {
        type: "number" | "integer";
    };
};
export declare const compileNumberFieldWithXparam: (data: KindOfNumber) => {
    "x-rpg-param": {
        data: {
            digit: number;
        } | {
            digit?: undefined;
        };
        parent?: string | undefined;
        kind: string;
    };
    description?: string | undefined;
    title?: string | undefined;
    default: number;
    type: "number" | "integer";
} | {
    "x-rpg-param": {
        data: {
            digit: number;
        } | {
            digit?: undefined;
        };
        parent?: string | undefined;
        kind: string;
    };
    description?: string | undefined;
    title?: string | undefined;
    default?: undefined;
    type: "number" | "integer";
};
export declare const compileNumberArrayFieldWithXParam: (data: KindOfNumberArray) => {
    "x-rpg-param": {
        data: {
            digit: number;
        } | {
            digit?: undefined;
        };
        parent?: string | undefined;
        kind: string;
    };
    description?: string | undefined;
    title?: string | undefined;
    default: number[];
    type: "array";
    items: {
        type: "number" | "integer";
    };
} | {
    "x-rpg-param": {
        data: {
            digit: number;
        } | {
            digit?: undefined;
        };
        parent?: string | undefined;
        kind: string;
    };
    description?: string | undefined;
    title?: string | undefined;
    default?: undefined;
    type: "array";
    items: {
        type: "number" | "integer";
    };
};
