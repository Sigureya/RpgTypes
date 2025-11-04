import { PluginCommandSchemaArray, PluginCommandSchemaArrayEx3 } from './arrayCommands';
import { PluginParam, PluginParamEx, StructPluginParam } from './arrayParamItems';
import { PluginStructSchemaArray, PluginStructSchemaArrayFilterd } from './arrayStructs';
import { PrimitiveStringParam } from './paramUnion';
import { RpgVariableParam, RpgVariableArrayParam, FileParam, FileArrayParam, StringArrayParam } from './primitive';
export interface PluginSchemaArray {
    commands: PluginCommandSchemaArray[];
    params: PluginParam[];
    structs: PluginStructSchemaArray[];
}
export interface PluginSchemaArrayEx2<T extends PluginParam> extends PluginSchemaArray {
    commands: PluginCommandSchemaArrayEx3<T | StructPluginParam>[];
    params: (T | StructPluginParam)[];
    structs: PluginStructSchemaArrayFilterd<T | StructPluginParam>[];
}
export type PluginVariableSchema = PluginSchemaArrayEx2<PluginParamEx<RpgVariableParam | RpgVariableArrayParam>>;
export type PluginFileParamsSchema = PluginSchemaArrayEx2<PluginParamEx<FileParam | FileArrayParam>>;
export type PluginTextSchema = PluginSchemaArrayEx2<PluginParamEx<PrimitiveStringParam | StringArrayParam>>;
