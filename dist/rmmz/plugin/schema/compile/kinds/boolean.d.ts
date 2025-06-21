import { KindOfBoolean } from './core/primitiveParams';
export declare const compileBooleanField: (data: KindOfBoolean) => {
    description?: string | undefined;
    title?: string | undefined;
    default: boolean;
    type: "boolean";
} | {
    description?: string | undefined;
    title?: string | undefined;
    default?: undefined;
    type: "boolean";
};
export declare const compileBooleanFieldWithXParam: (data: KindOfBoolean) => {
    "x-rpg-param": {
        data: {
            off?: string | undefined;
            on?: string | undefined;
        };
        parent?: string | undefined;
        kind: string;
    };
    description?: string | undefined;
    title?: string | undefined;
    default: boolean;
    type: "boolean";
} | {
    "x-rpg-param": {
        data: {
            off?: string | undefined;
            on?: string | undefined;
        };
        parent?: string | undefined;
        kind: string;
    };
    description?: string | undefined;
    title?: string | undefined;
    default?: undefined;
    type: "boolean";
};
