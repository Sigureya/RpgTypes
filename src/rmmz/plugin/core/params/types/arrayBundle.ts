import type {
  PluginCommandSchemaArray,
  PluginCommandSchemaArrayEx3,
} from "./arrayCommands";
import type {
  PluginParam,
  PluginParamEx,
  StructPluginParam,
} from "./arrayParamItems";
import type {
  PluginStructSchemaArray,
  PluginStructSchemaArrayFilterd,
} from "./arrayStructs";
import type { PrimitiveStringParam } from "./paramUnion";
import type {
  RpgVariableParam,
  RpgVariableArrayParam,
  FileParam,
  FileArrayParam,
  StringArrayParam,
} from "./primitive";

export interface PluginSchemaArray {
  commands: PluginCommandSchemaArray[];
  params: PluginParam[];
  structs: PluginStructSchemaArray[];
}

export interface PluginSchemaArrayEx2<T extends PluginParam>
  extends PluginSchemaArray {
  commands: PluginCommandSchemaArrayEx3<T | StructPluginParam>[];
  params: (T | StructPluginParam)[];
  structs: PluginStructSchemaArrayFilterd<T | StructPluginParam>[];
}

export type PluginVariableSchema = PluginSchemaArrayEx2<
  PluginParamEx<RpgVariableParam | RpgVariableArrayParam>
>;

export type PluginFileParamsSchema = PluginSchemaArrayEx2<
  PluginParamEx<FileParam | FileArrayParam>
>;

export type PluginTextSchema = PluginSchemaArrayEx2<
  PluginParamEx<PrimitiveStringParam | StringArrayParam>
>;
