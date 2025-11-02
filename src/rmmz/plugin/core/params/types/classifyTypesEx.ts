import type { ClassifiedPluginParamsEx2 } from "./classifyTypes";
import type { PrimitiveStringParam } from "./paramUnion";
import type { FileParam, FileArrayParam, StringArrayParam } from "./primitive";

export type ClassifiedPluginFileParams = ClassifiedPluginParamsEx2<
  FileParam,
  FileArrayParam
>;

export type ClassifiedTextParams = ClassifiedPluginParamsEx2<
  PrimitiveStringParam,
  StringArrayParam
>;
