import { JSONSchemaType } from 'ajv';
import { JSONSchemaTypeWithRpgParam } from './core/paramBase/x-rpg-param';
import { ComboParam } from './core/primitiveParams';
export declare const compileComboField: (data: ComboParam) => JSONSchemaType<string>;
export declare const compileComboFieldWithXparam: (data: ComboParam) => JSONSchemaTypeWithRpgParam<string, {
    options: string[];
}>;
