import { RmmzParamCore_Boolean } from './boolean';
import { RmmzParamCore_Number } from './numbers';
import { DataKindUnion, RmmzParamCore_DataId } from './rpgDataId';
import { RmmzParamTextFields } from './x-rpg-param2';
type NewRmmzParam<T extends {
    type: string;
    default: number | string | boolean;
}> = T & Partial<RmmzParamTextFields>;
export type NewRmmzParam_Boolean = NewRmmzParam<RmmzParamCore_Boolean>;
export type NewRmmzParam_Number = NewRmmzParam<RmmzParamCore_Number>;
export type NewRmmzParam_DataId = NewRmmzParam<RmmzParamCore_DataId<DataKindUnion>>;
export {};
