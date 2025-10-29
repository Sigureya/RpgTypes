import { ClassifiedPluginParams, StructRefParam, PluginParam } from '../../../../rmmz/plugin';
import { ErrorCodes, StructPathResult } from './types';
export declare function getPathFromStructParam(params: ReadonlyArray<PluginParam<StructRefParam>>, parent: string, structMap: ReadonlyMap<string, ClassifiedPluginParams>, errors?: ErrorCodes): StructPathResult;
export declare function getPathFromStructSchema(structName: string, parent: string, structMap: ReadonlyMap<string, ClassifiedPluginParams>, errors?: ErrorCodes): StructPathResult;
