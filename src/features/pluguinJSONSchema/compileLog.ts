import type {
  StructParam,
  StructDefParam,
  StructArrayDefParam,
} from "@RpgTypes/rmmz/plugin/schema/compile/kinds/core/pluginEntriesEx";
import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";

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

export const defineStructs = (
  logList: ReadonlyArray<StructCompileLog>
): Record<string, JSONSchemaType<object>> => {
  return logList
    .filter((logItem) => isStructParam(logItem))
    .reduce((acc, logItem) => {
      return {
        ...acc,
        [logItem.structName]: logItem.schema,
      };
    }, {});
};

const isStructParam = (
  log: StructCompileLog<StructParam>
): log is StructCompileLog<
  StructDefParam<object> | StructArrayDefParam<object>
> => {
  return (
    (log.data.kind === "struct_def" || log.data.kind === "struct_def[]") &&
    !!log.data.struct
  );
};
