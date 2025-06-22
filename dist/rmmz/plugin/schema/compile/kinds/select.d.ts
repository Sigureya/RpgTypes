import { JSONSchemaType } from 'ajv';
import { KindOfSelect } from './core/primitiveParams';
import { JSONSchemaTypeWithRpgParam } from './core/x-rpg-param';
export declare const compileSelectField: (data: KindOfSelect) => JSONSchemaType<string>;
export declare const compileSelectFieldWithXparam: (data: KindOfSelect) => JSONSchemaTypeWithRpgParam<string>;
