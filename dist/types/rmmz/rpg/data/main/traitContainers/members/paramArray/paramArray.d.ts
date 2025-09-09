import { StatusParamObject, ParamArray } from './types';
export declare const makeParamArray: ({ mhp, mmp, atk, def, mat, mdf, agi, luk, }: Partial<StatusParamObject>) => ParamArray;
export declare const paramArrayToObject: (paramArray: ParamArray) => StatusParamObject;
