import { KindOfString, KindOfSelect, KindOfCombo, KindOfFile } from './core/primitiveParams';
import { JSONSchemaTypeWithRpgParam } from './core/x-rpg-param';
export declare const compileStringField: (data: KindOfString) => {
    default: string;
    description?: string | undefined;
    title?: string | undefined;
    type: "string";
} | {
    default?: undefined;
    description?: string | undefined;
    title?: string | undefined;
    type: "string";
};
export declare const compileStringFieldWithXparam: (data: KindOfString) => JSONSchemaTypeWithRpgParam<string>;
export declare const compileSelectField: (data: KindOfSelect) => {
    enum?: string[] | undefined;
    description?: string | undefined;
    title?: string | undefined;
    default: string;
    type: "string";
} | {
    enum?: string[] | undefined;
    description?: string | undefined;
    title?: string | undefined;
    default?: undefined;
    type: "string";
};
export declare const compileSelectFieldWithXparam: (data: KindOfSelect) => JSONSchemaTypeWithRpgParam<string>;
export declare const compileComboField: (data: KindOfCombo) => {
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
export declare const compileComboFieldWithXparam: (data: KindOfCombo) => JSONSchemaTypeWithRpgParam<string>;
export declare const compileFileField: (data: KindOfFile) => {
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
export declare const compileFileFieldWithXparam: (data: KindOfFile) => JSONSchemaTypeWithRpgParam<string>;
