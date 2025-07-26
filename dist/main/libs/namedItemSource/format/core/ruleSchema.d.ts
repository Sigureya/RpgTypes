import { JSONSchemaType } from 'ajv';
import { FormatRule } from './rule';
export interface FormatRuleSchema<T> {
    schema: JSONSchemaType<T>;
    rule: FormatRule<T>;
}
