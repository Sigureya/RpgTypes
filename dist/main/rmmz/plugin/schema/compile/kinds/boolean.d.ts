import { JSONSchemaType } from 'ajv';
import { JSONSchemaTypeWithRpgParam } from './core/paramBase/x-rpg-param';
import { BooleanParam } from './core/primitiveParams';
export declare const compileBooleanField: (data: BooleanParam) => JSONSchemaType<boolean>;
export declare const compileBooleanFieldWithXParam: (data: BooleanParam) => JSONSchemaTypeWithRpgParam<BooleanParam>;
