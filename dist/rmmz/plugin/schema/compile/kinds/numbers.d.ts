import { JSONSchemaType } from 'ajv';
import { JSONSchemaTypeWithRpgParam } from './core/paramBase/x-rpg-param';
import { NumberParam, NumberArrayParam } from './core/primitiveParams';
export declare const compileNumberField: (data: NumberParam) => JSONSchemaType<number>;
export declare const compileNumberArrayField: (data: NumberArrayParam) => JSONSchemaType<number[]>;
export declare const compileNumberFieldWithXparam: (data: NumberParam) => JSONSchemaTypeWithRpgParam<number>;
export declare const compileNumberArrayFieldWithXParam: (data: NumberArrayParam) => JSONSchemaTypeWithRpgParam<number[]>;
