import { BooleanParam } from '../../../../rmmz/plugin';
import { JSONSchemaType } from 'ajv';
import { JSONSchemaTypeWithRpgParam } from './x-param/base/x-rpg-param';
export declare const compileBooleanField: (data: BooleanParam) => JSONSchemaType<boolean>;
export declare const compileBooleanFieldWithXParam: (data: BooleanParam) => JSONSchemaTypeWithRpgParam<BooleanParam>;
