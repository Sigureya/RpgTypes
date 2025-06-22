import { KindOfString } from './core/primitiveParams';
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
