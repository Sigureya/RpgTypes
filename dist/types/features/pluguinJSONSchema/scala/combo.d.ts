import { ComboParam } from '../../../rmmz/plugin/schema/compile';
import { JSONSchemaType } from 'ajv';
import { JSONSchemaTypeWithRpgParam } from './x-param/base/x-rpg-param';
export declare const compileComboField: (data: ComboParam) => JSONSchemaType<string>;
export declare const compileComboFieldWithXparam: (data: ComboParam) => JSONSchemaTypeWithRpgParam<ComboParam>;
