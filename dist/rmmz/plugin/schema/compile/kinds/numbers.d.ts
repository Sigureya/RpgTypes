import { JSONSchemaType } from 'ajv';
import { KindOfNumber, KindOfNumberArray } from './core/primitiveParams';
import { JSONSchemaTypeWithRpgParam } from './core/x-rpg-param';
export declare const compileNumberField: (data: KindOfNumber) => JSONSchemaType<number>;
export declare const compileNumberArrayField: (data: KindOfNumberArray) => JSONSchemaType<number[]>;
export declare const compileNumberFieldWithXparam: (data: KindOfNumber) => JSONSchemaTypeWithRpgParam<number>;
export declare const compileNumberArrayFieldWithXParam: (data: KindOfNumberArray) => JSONSchemaTypeWithRpgParam<number[]>;
