import type {
  KindOfBoolean,
  KindOfNumber,
  KindOfNumberArray,
  KindOfRpgDataId,
  KindOfSelect,
  KindOfString,
  KindOfStringArray,
  KindOfSystemDataId,
  KindOfFile,
  KindOfRpgDataIdArray,
  KindOFCombo,
  KindOfStructRef,
  KindOfFileArray,
} from "./kinds";

// 各パラメータ型のユニオン
export type StructParam =
  | KindOfBoolean
  | KindOfNumber
  | KindOfNumberArray
  | KindOfRpgDataId
  | KindOfRpgDataIdArray
  | KindOFCombo
  | KindOfSelect
  | KindOfString
  | KindOfStringArray
  | KindOfSystemDataId
  | KindOfFile
  | KindOfFileArray
  | KindOfStruct<object> // ネスト構造体対応
  | KindOfStructArray<object>
  | KindOfStructRef;

export interface KindOfStructArray<T extends object> {
  kind: "struct[]";
  default: object[];
  structName: string;
  params: {
    [K in keyof T]: StructParam;
  };
}

// 構造体アノテーション
export interface KindOfStruct<T extends object> {
  kind: "struct";
  structName: string;
  params: {
    [K in keyof T]: StructParam;
  };
}

// 構造体本体
export interface PluginStruct<T extends object> {
  structName: string;
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
