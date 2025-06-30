import { JSONSchemaType } from 'ajv';
import { JSONSchemaTypeWithRpgParam } from './core/paramBase/x-rpg-param';
import { StringParam } from './core/primitiveParams';
export declare const compileStringField: (data: StringParam) => JSONSchemaType<string>;
export declare const compileStringFieldWithXparam: (data: StringParam) => JSONSchemaTypeWithRpgParam<StringParam>;
