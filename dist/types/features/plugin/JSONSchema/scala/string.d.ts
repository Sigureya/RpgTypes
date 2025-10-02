import { StringParam } from '../../../../rmmz/plugin/schema/compile';
import { JSONSchemaType } from 'ajv';
import { JSONSchemaTypeWithRpgParam } from './x-param/base/x-rpg-param';
export declare const compileStringField: (data: StringParam) => JSONSchemaType<string>;
export declare const compileStringFieldWithXparam: (data: StringParam) => JSONSchemaTypeWithRpgParam<StringParam>;
