import { JSONSchemaType } from 'ajv';
import { JSONSchemaTypeWithRpgParam } from './core/paramBase/x-rpg-param';
import { SelectParam } from './core/primitiveParams';
export declare const compileSelectField: (data: SelectParam) => JSONSchemaType<string>;
export declare const compileSelectFieldWithXparam: (data: SelectParam) => JSONSchemaTypeWithRpgParam<SelectParam>;
