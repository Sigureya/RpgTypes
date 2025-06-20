import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { KindOfStruct, KindOfStructArray, StructParam } from "./plugin";

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
  data: KindOfStruct<T>;
  schema: JSONSchemaType<T>;
  structName: string;
}

const isStructParam = (
  log: StructCompileLog<StructParam>
): log is StructCompileLog<
  KindOfStruct<object> | KindOfStructArray<object>
> => {
  return (
    (log.data.kind === "struct" || log.data.kind === "struct[]") &&
    !!log.data.struct
  );
};

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
