import { ClassifiedPluginParams, StructRefParam } from '../../../rmmz/plugin';
import { PluginParam } from '../../../rmmz/plugin/core/types';
import { ErrorCodes } from './types/errorTypes';
import { StructPathResult } from './types/struct2';
export declare function getPathFromStructParam(params: ReadonlyArray<PluginParam<StructRefParam>>, parent: string, structMap: ReadonlyMap<string, ClassifiedPluginParams>, errors?: ErrorCodes): StructPathResult;
export declare function getPathFromStructSchema(structName: string, parent: string, structMap: ReadonlyMap<string, ClassifiedPluginParams>, errors?: ErrorCodes): StructPathResult;
