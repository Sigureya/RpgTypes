import { JSONSchemaType } from 'ajv';
import { CompileContext } from './context';
import { KindBase, KindOfBoolean, KindOFCombo, KindOfFile, KindOfNumber, KindOfNumberArray, KindOfRpgDataId, KindOfSelect, KindOfString, KindOfStructRef, KindOfSystemDataId } from './core/kinds/kinds';
export declare const withTexts: (kind: KindBase) => {
    description?: string | undefined;
    title?: string | undefined;
};
export declare const withDefault: <T>(value: T | undefined) => {
    default: T & ({} | null);
} | {
    default?: undefined;
};
export declare const makeStringField: (data: KindOfString) => {
    default?: string | undefined;
    type: "string";
};
export declare const makeSelectField: (data: KindOfSelect) => {
    enum?: string[] | undefined;
    default: string;
    type: "string";
} | {
    enum?: string[] | undefined;
    default?: undefined;
    type: "string";
};
interface KindOfArray<T> {
    kind: `${string}[]`;
    default?: T[];
}
export declare const makeArrayField: <T>(data: KindOfArray<T>, itemType: string) => JSONSchemaType<T[]>;
export declare const makeNumberField: (data: KindOfNumber, ctx: CompileContext) => {
    "x-rpg-param"?: {
        data: {
            digit: number;
        } | {
            digit?: undefined;
        };
        parent?: string | undefined;
        kind: string;
    } | undefined;
    description?: string | undefined;
    title?: string | undefined;
    default: number;
    type: "number" | "integer";
} | {
    "x-rpg-param"?: {
        data: {
            digit: number;
        } | {
            digit?: undefined;
        };
        parent?: string | undefined;
        kind: string;
    } | undefined;
    description?: string | undefined;
    title?: string | undefined;
    default?: undefined;
    type: "number" | "integer";
};
export declare const makeNumberArrayField: (data: KindOfNumberArray, ctx: CompileContext) => {
    "x-rpg-param"?: {
        data: {
            digit: number;
        } | {
            digit?: undefined;
        };
        parent?: string | undefined;
        kind: string;
    } | undefined;
    description?: string | undefined;
    title?: string | undefined;
    default: number[];
    type: "array";
    items: {
        type: "number" | "integer";
    };
} | {
    "x-rpg-param"?: {
        data: {
            digit: number;
        } | {
            digit?: undefined;
        };
        parent?: string | undefined;
        kind: string;
    } | undefined;
    description?: string | undefined;
    title?: string | undefined;
    default?: undefined;
    type: "array";
    items: {
        type: "number" | "integer";
    };
};
export declare const makeIdField: (data: KindOfRpgDataId | KindOfSystemDataId, ctx: CompileContext) => {
    "x-rpg-param"?: {
        data: import('./core/kinds/rpgData/lookup').SourceId_RmmzUnknown | import('./core/kinds/rpgData/lookup').SourceId_ValidRmmzData;
        parent?: string | undefined;
        kind: string;
    } | undefined;
    description?: string | undefined;
    title?: string | undefined;
    default: number;
    type: "integer";
} | {
    "x-rpg-param"?: {
        data: import('./core/kinds/rpgData/lookup').SourceId_RmmzUnknown | import('./core/kinds/rpgData/lookup').SourceId_ValidRmmzData;
        parent?: string | undefined;
        kind: string;
    } | undefined;
    description?: string | undefined;
    title?: string | undefined;
    default?: undefined;
    type: "integer";
};
export declare const makeBooleanField: (data: KindOfBoolean, ctx: CompileContext) => {
    "x-rpg-param"?: {
        data: {
            off?: string | undefined;
            on?: string | undefined;
        };
        parent?: string | undefined;
        kind: string;
    } | undefined;
    description?: string | undefined;
    title?: string | undefined;
    default: boolean;
    type: "boolean";
} | {
    "x-rpg-param"?: {
        data: {
            off?: string | undefined;
            on?: string | undefined;
        };
        parent?: string | undefined;
        kind: string;
    } | undefined;
    description?: string | undefined;
    title?: string | undefined;
    default?: undefined;
    type: "boolean";
};
export declare const makeComboField: (data: KindOFCombo) => {
    description?: string | undefined;
    title?: string | undefined;
    default: string;
    type: "string";
} | {
    description?: string | undefined;
    title?: string | undefined;
    default?: undefined;
    type: "string";
};
export declare const makeFileField: (data: KindOfFile) => {
    description?: string | undefined;
    title?: string | undefined;
    default: string;
    type: "string";
} | {
    description?: string | undefined;
    title?: string | undefined;
    default?: undefined;
    type: "string";
};
export declare const makeStructRef: (ref: KindOfStructRef) => {
    description?: string | undefined;
    title?: string | undefined;
    $ref: string;
};
export {};
