import { JSONSchemaType } from 'ajv';
import { KindOfCombo } from './core/primitiveParams';
import { JSONSchemaTypeWithRpgParam } from './core/x-rpg-param';
export declare const compileComboField: (data: KindOfCombo) => JSONSchemaType<string>;
export declare const compileComboFieldWithXparam: (data: KindOfCombo) => JSONSchemaTypeWithRpgParam<string, {
    options: string[];
}>;
