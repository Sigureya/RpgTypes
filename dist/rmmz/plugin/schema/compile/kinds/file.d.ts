import { JSONSchemaTypeWithRpgParam } from './core/paramBase/x-rpg-param';
import { FileParam } from './core/primitiveParams';
export declare const compileFileField: (data: FileParam) => {
    title?: string;
    description?: string;
    default?: string | undefined;
    type: "string";
};
export declare const compileFileFieldWithXparam: (data: FileParam) => JSONSchemaTypeWithRpgParam<string>;
