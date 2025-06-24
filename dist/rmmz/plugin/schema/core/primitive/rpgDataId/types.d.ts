import { DataKindUnion } from './rpgDataTypesNames';
export interface RmmzParamCore_DataId<Name extends DataKindUnion> {
    type: Name;
    default: number;
}
