import { ClassifiedPluginParams, StructRefParam, PluginParamEx } from '../../../../rmmz/plugin';
import { ErrorCodes, StructPathResult } from './types';
export declare function getPathFromStructParam(params: ReadonlyArray<PluginParamEx<StructRefParam>>, parent: string, structMap: ReadonlyMap<string, ClassifiedPluginParams>, errors?: ErrorCodes): StructPathResult;
export declare function getPathFromStructSchema(structName: string, parent: string, structMap: ReadonlyMap<string, ClassifiedPluginParams>, errors?: ErrorCodes): StructPathResult;
