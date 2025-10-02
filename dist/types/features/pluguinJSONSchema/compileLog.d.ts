import { StructParam, StructDefParam } from '../../rmmz/plugin/schema/compile/kinds/core/pluginEntriesEx';
import { JSONSchemaType } from 'ajv';
import { Schema } from 'jsonschema';
export interface CompileResult<T extends object> {
    schema: JSONSchemaType<T>;
    logs: StructCompileLog[];
}
export interface StructCompileLog<Data extends StructParam = StructParam> {
    path: string;
    data: Data;
    schema: Schema | {};
    structName: string;
}
export interface StructCompileLogObjectEntry<T extends object> {
    path: string;
    data: StructDefParam<T>;
    schema: JSONSchemaType<T>;
    structName: string;
}
export declare const defineStructs: (logList: ReadonlyArray<StructCompileLog>) => Record<string, JSONSchemaType<object>>;
