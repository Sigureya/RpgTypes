import { JSONSchemaType } from 'ajv';
import { StructParam } from './plugin';
export interface CompileResult<T extends object> {
    schema: JSONSchemaType<T>;
    logs: CompileLogItem[];
}
export interface CompileLogItem {
    path: string;
    data: StructParam;
}
