import { ClassifiedPluginParamsEx2 } from './classifyTypes';
import { PrimitiveStringParam } from './paramUnion';
import { FileParam, FileArrayParam, StringArrayParam } from './primitive';
export type ClassifiedPluginFileParams = ClassifiedPluginParamsEx2<FileParam, FileArrayParam>;
export type ClassifiedTextParams = ClassifiedPluginParamsEx2<PrimitiveStringParam, StringArrayParam>;
