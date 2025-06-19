import { NewRmmzParam_Boolean, NewRmmzParam_DataId, NewRmmzParam_Number, NewRmmzParam_String, NewRmmzParam_Unknown } from './newParamType';
import { X_Param_Boolean, X_Param_DataId, X_Param_Number, X_Param_String } from './x-rpg-param';
import { SchemaDescriptionFields } from './x-rpg-param2';
export declare const makeBooleanParam: (schema: SchemaDescriptionFields<boolean>, xparam: X_Param_Boolean) => Required<NewRmmzParam_Boolean>;
export declare const makeNumberParam: (schema: SchemaDescriptionFields<number> & {
    maximum?: number;
    minimum?: number;
}, xparam: X_Param_Number) => Required<NewRmmzParam_Number>;
export declare const makeDataIdStringParam: (schema: SchemaDescriptionFields<string>, xparam: X_Param_String) => Required<NewRmmzParam_String>;
export declare const makeDataIdParam: (schema: SchemaDescriptionFields<number>, xparam: X_Param_DataId) => Required<NewRmmzParam_DataId> | NewRmmzParam_Unknown<number>;
