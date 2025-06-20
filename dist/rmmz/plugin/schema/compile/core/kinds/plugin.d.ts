import { KindOfBoolean, KindOfNumber, KindOfNumberArray, KindOfRpgDataId, KindOfSelect, KindOfString, KindOfStringArray, KindOfSystemDataId, KindOfFile, KindOfRpgDataIdArray, KindOFCombo, KindOfStructRef, KindOfFileArray, KindBase } from './kinds';
export type StructParamPrimitive = KindOfBoolean | KindOfNumber | KindOfNumberArray | KindOfRpgDataId | KindOfRpgDataIdArray | KindOFCombo | KindOfSelect | KindOfString | KindOfStringArray | KindOfSystemDataId | KindOfFile | KindOfFileArray | KindOfStructRef;
export type StructParam = StructParamPrimitive | KindOfStruct<object> | KindOfStructArray<object>;
export interface KindOfStructArray<T extends object> extends PluginStruct<T>, KindBase {
    kind: "struct_def[]";
    default: object[];
    struct: string;
    params: {
        [K in keyof T]: StructParam;
    };
}
export interface KindOfStruct<T extends object> extends PluginStruct<T>, KindBase {
    kind: "struct_def";
    struct: string;
    params: {
        [K in keyof T]: StructParam;
    };
}
export interface PluginStruct<T extends object> {
    struct: string;
    params: {
        [K in keyof T]: StructParam;
    };
}
export interface PluginCommand<T extends object> {
    command: string;
    desc?: string;
    text?: string;
    args: {
        [K in keyof T]: StructParam;
    };
}
