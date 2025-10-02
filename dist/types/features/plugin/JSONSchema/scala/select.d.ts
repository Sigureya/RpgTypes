import { SelectParam } from '../../../../rmmz/plugin/schema/compile';
import { JSONSchemaType } from 'ajv';
import { JSONSchemaTypeWithRpgParam } from './x-param/base/x-rpg-param';
export declare const compileSelectField: (data: SelectParam) => JSONSchemaType<string>;
export declare const compileSelectFieldWithXparam: (data: SelectParam) => JSONSchemaTypeWithRpgParam<SelectParam>;
