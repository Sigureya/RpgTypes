import { NumberParam, NumberArrayParam } from '../../../../rmmz/plugin/schema/compile';
import { JSONSchemaType } from 'ajv';
import { JSONSchemaTypeWithRpgParam } from './x-param/base/x-rpg-param';
export declare const compileNumberField: (data: NumberParam) => JSONSchemaType<number>;
export declare const compileNumberArrayField: (data: NumberArrayParam) => JSONSchemaType<number[]>;
export declare const compileNumberFieldWithXparam: (data: NumberParam) => JSONSchemaTypeWithRpgParam<NumberParam>;
export declare const compileNumberArrayFieldWithXParam: (data: NumberArrayParam) => JSONSchemaTypeWithRpgParam<NumberArrayParam>;
