import { KindOfBoolean, KindOfNumber, KindOfNumberArray, KindOfRpgDataId, KindOfSelect, KindOfString, KindOfStringArray, KindOfSystemDataId, KindOfFile, KindOfRpgDataIdArray, KindOFCombo, KindOfStructRef, KindOfFileArray } from './kinds';
export type StructParam = KindOfBoolean | KindOfNumber | KindOfNumberArray | KindOfRpgDataId | KindOfRpgDataIdArray | KindOFCombo | KindOfSelect | KindOfString | KindOfStringArray | KindOfSystemDataId | KindOfFile | KindOfFileArray | KindOfStruct<object> | CoreStruct | KindOfStructArray | KindOfStructRef;
interface CoreStruct {
    kind: "struct";
    struct: PluginStruct<object>;
}
export interface KindOfStructArray {
    kind: "struct[]";
    struct: PluginStruct<object>;
    default: object[];
}
export interface KindOfStruct<T extends object> {
    kind: "struct";
    struct: PluginStruct<T>;
}
export interface PluginStruct<T extends object> {
    structName: string;
    params: {
        [K in keyof T]: StructParam;
    };
}
export interface PluginCommand<T extends object> {
    commandName: string;
    args: {
        [K in keyof T]: StructParam;
    };
}
export {};
