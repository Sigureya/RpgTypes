import { JSONSchemaType } from 'ajv';
import { KindOfBoolean } from './core/primitiveParams';
import { JSONSchemaTypeWithRpgParam } from './core/x-rpg-param';
export declare const compileBooleanField: (data: KindOfBoolean) => JSONSchemaType<boolean>;
export declare const compileBooleanFieldWithXParam: (data: KindOfBoolean) => JSONSchemaTypeWithRpgParam<boolean, {
    on?: string;
    off?: string;
}>;
