import { KindOfFile } from './core/primitiveParams';
import { JSONSchemaTypeWithRpgParam } from './core/x-rpg-param';
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
